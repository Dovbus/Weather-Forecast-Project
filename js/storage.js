export const storage = {
	saveFavoriteCities: (favoriteCities) => {
		localStorage.setItem('cities', JSON.stringify(favoriteCities));
	},
	getFavoriteCities: () => {
		const strFavoriteCities = localStorage.getItem('cities');
		const favoriteCities = JSON.parse(strFavoriteCities);
		return favoriteCities;
	},
}