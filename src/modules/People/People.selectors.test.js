import * as selectors from './People.selectors';
describe('People Selectors', () => {
	describe('getAllPeople', () => {
		it('should get all the people', () => {
			const state = {
				people: {
					all: {
						5: {
							name: 'Anvar',
							id: 5,
							followIds: [10, 15, 20],
						},
						10: {
							name: 'Luke',
							id: 10,
							followIds: [15],
						},
						15: {
							name: 'Sugat',
							id: 15,
							followIds: [10],
						},
						20: {
							name: 'Aaron',
							id: 20,
							followIds: [5, 10],
						},
					},
				},
			};

			expect(selectors.getAllPeople(state)).toEqual({
				5: {
					name: 'Anvar',
					id: 5,
					followIds: [10, 15, 20],
				},
				10: {
					name: 'Luke',
					id: 10,
					followIds: [15],
				},
				15: {
					name: 'Sugat',
					id: 15,
					followIds: [10],
				},
				20: {
					name: 'Aaron',
					id: 20,
					followIds: [5, 10],
				},
			});
		});
	});

	describe('getListOfFollowedPeople', () => {
		it('should get the list of followed people ids', () => {
			const state = {
				people: {
					all: {
						5: {
							name: 'Anvar',
							id: 5,
							followIds: [10, 15, 20],
						},
						10: {
							name: 'Luke',
							id: 10,
							followIds: [15],
						},
						15: {
							name: 'Sugat',
							id: 15,
							followIds: [10],
						},
						20: {
							name: 'Aaron',
							id: 20,
							followIds: [5, 10],
						},
					},
				},
			};

			expect(selectors.getListOfFollowedPeople(state)).toEqual([
				10,
				15,
				20,
				15,
				10,
				5,
				10,
			]);
		});
	});

	describe('getMostFollowedPerson', () => {
		it('should get the most followed person', () => {
			const state = {
				people: {
					all: {
						5: {
							name: 'Anvar',
							id: 5,
							followIds: [10, 15, 20],
						},
						10: {
							name: 'Luke',
							id: 10,
							followIds: [15],
						},
						15: {
							name: 'Sugat',
							id: 15,
							followIds: [10],
						},
						20: {
							name: 'Aaron',
							id: 20,
							followIds: [5, 10],
						},
					},
				},
			};

			expect(selectors.getMostFollowedPerson(state)).toEqual({
				name: 'Luke',
				id: 10,
				followIds: [15],
			});
		});

		it('should return an empty object if no people exists', () => {
			const state = {
				people: { loading: true },
			};

			expect(selectors.getMostFollowedPerson(state)).toEqual({});
		});
	});
});
