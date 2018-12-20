describe('Mocking learning', () => {
  it('mocks as a reg function', () => {
    const fetchDogs = jest.fn(); //mock function
    fetchDogs('Snickers');
    expect(fetchDogs).toHaveBeenCalled();
    expect(fetchDogs).toHaveBeenCalledWith('Snickers');
  });
})