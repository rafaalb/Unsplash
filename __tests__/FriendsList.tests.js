import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { FriendsList } from '../components/FriendsList';

const item = {
  friends: ['Carlos Perez', 'Andres Hevia', 'Eric Bellet'],
  thumbnail: 'image.png'
};

describe('<FriendsList />', () => {
  const wrapper = shallow(
    <FriendsList item={item} />
  );
  it('renders', () => {
    shallow(<FriendsList item={item} />)
  });
  it('renders and matches the snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it('renders all items', () => {
    const list = wrapper.find('WithStyles(Chip)')
    expect(list.length).toEqual(3);
  });
});