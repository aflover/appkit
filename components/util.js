export function propValue(type) {
	return function () {
		return new type();
	};
}

let uidx = 1;
export function uniqueKey(key) {
	return key ? (key + uidx) : uidx;
}

export function noop() {}

