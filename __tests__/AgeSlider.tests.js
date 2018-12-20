import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { AgeSlider } from '../components/AgeSlider';

describe('', () => {
  it('renders', () => {
    shallow(<AgeSlider />)
  });
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <AgeSlider />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it('should call filter on button click', () => {
    const onFilter = jest.fn();
    const wrapper = shallow(
      <AgeSlider onFilter={onFilter} />
    );
    const button = wrapper.find('WithStyles(Button)');
    button.simulate('click');
    expect(onFilter).toHaveBeenCalled();
  })
});