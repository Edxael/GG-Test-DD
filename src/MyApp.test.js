// ===[ Importing Dependencies ]================================
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
 

 
// ===[ Testing <TextComponet/> ]===============================
import Main from './AppCode/00-Main'
 
describe('Runing test for <Main /> Componet:', () => { 
    Enzyme.configure({ adapter: new Adapter() })
    const Wrapper = Enzyme.shallow(<Main />)
    
    it('Renders the <Main /> component', () => {
      expect.anything(Wrapper)
    })

    it('Test if initial value on state.total = 0', () => {
      expect(Wrapper.state().total).toEqual(0)
    })

    it('finds the Main <div> container', () => {
      Wrapper.find('.main-cont')
    })

    it('Test if when button click changes state to 1', () => {
      Wrapper.find('.btn-add-1').simulate('click')
      expect(Wrapper.state().total).toEqual(1)
    })

})


