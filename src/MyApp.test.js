// ===[ Importing Dependencies ]================================
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
 
 
 
 
// ===[ Testing <TextComponet/> ]===============================
import Main from './AppCode/00-Main'
 
describe('Run test:', () => { 
    Enzyme.configure({ adapter: new Adapter() })
    
    it('Renders the <Main /> component', () => {
      const Wrapper = Enzyme.shallow(<Main />)
      expect.anything(Wrapper)
    })
})
