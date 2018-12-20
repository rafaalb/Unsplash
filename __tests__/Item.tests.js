import ItemComponent from '../components/Item';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

const fakeItem = {
  friends: ['Emily', 'Rafael'],
  thumbnail: 'image.jpg',
  age: 20,
  weight: 200,
  height: 150,
  hair_color: 'red',
  professions: ['Carpenter', 'Computer Scientist'],
  name: 'Zedkin Thor'
};

describe('<Item />', () => {
  const wrapper = shallow(<ItemComponent item={fakeItem} />);
  it('renders the image properly', () => {
    const img = wrapper.find('img');
    expect(img.props().src).toEqual(fakeItem.thumbnail);
  });
  it('renders age and title', () => {
    const title = wrapper.find('Title a').text();
    const age = wrapper.find('Age__AgeTag');
    expect(age.children().text()).toEqual('20 years old');
    expect(title).toEqual('Zedkin Thor');
  });
  it('renders and matches the snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
