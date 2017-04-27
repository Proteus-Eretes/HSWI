(function () {
	"use strict";

	var app = angular.module("app");
	app.service("idbService", function ($http, $state, $rootScope) {

		this.startDB = function (dbName, index1, index2) {
			return new Promise(resolve => {
				var db;

				var request = window.indexedDB.open(dbName, 2);

				request.onerror = function (event) {
					resolve(db);
				}
				request.onsuccess = function (event) {
					resolve(event.target.result);
				}
				request.onupgradeneeded = function (event) {
					db = event.target.result;

					var objectStore = db.createObjectStore(dbName + "Store", {autoIncrement: true});

					objectStore.createIndex(index1, index1, { unique: false });
					objectStore.createIndex(index2, index2, { unique: false });

					objectStore.transaction.oncomplete = function (event) {
						resolve(db);
					}
				}
			});
		}

		this.addToDB = function (db, dbName, item) {
			return new Promise(resolve => {
				var objectStore = db.transaction([dbName + "Store"], "readwrite").objectStore(dbName + "Store");

				var request = objectStore.put(item);

				request.onsuccess = function (event) {
					resolve();
				}
			})
		}

		this.getItems = function (db, dbName) {
			return new Promise(resolve => {
				var objectStore = db.transaction([dbName + "Store"], "readwrite").objectStore(dbName + "Store");

				var items = [];
				objectStore.openCursor().onsuccess = function (event) {
					var cursor = event.target.result;

					if (cursor) {
						items.push(cursor.value);
						cursor.continue();
					} else {
						db.close();
						resolve(items);
					}
				};
			})
		}
	});
})();
