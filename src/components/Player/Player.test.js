import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Player />);
});

it('renders correct name', () => {
    const playerNamePassed = 'Ania';
    const playerComponent = shallow(<Player name={playerNamePassed} />);
  
    const playerNameRendered = playerComponent.find('.Player_name').text();
  
    expect(playerNameRendered).toEqual(playerNamePassed);
  });

  it("renders the score", () => {
    const playersScorePassed = 55;
    const playerComponent = shallow(<Player score={playersScorePassed} />);
    
    const playersScoreRendered = Number(playerComponent.find(".Player_score").text());
   
    expect(playersScoreRendered).toEqual(playersScorePassed);
  });

  it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);
  
    const plusButton = playerComponent.find('.Player_button');
  
    plusButton.simulate('click');
  
    expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
  });

  it('should call onPlayerScoreChange with -1 when minus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);
  
    const minusButton = playerComponent.find('.Player_button_minus');
  
    minusButton.simulate('click');
  
    expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
  });

  it("should remove the player", () => {
    const mockedOnRemovePlayer = jest.fn();
    const playerComponent = shallow(<Player onPlayerRemove={mockedOnRemovePlayer} />);

    const removeButton = playerComponent.find(".Player_button_remove");
    removeButton.simulate("click");

    expect(mockedOnRemovePlayer).toBeCalledWith();
  });