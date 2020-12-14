import {storiesOf}  from '@storybook/react'
import PropTypes from 'prop-types';
import Accueil from './Accueil';



export default{

    title: 'Accueil',
    component: Accueil,
    argTypes:{
        color :{control : 'text'}
    }
}

 const acc = args => <Accueil {...args}/> 
 export const accueil = acc.bind({})
 accueil.args={
     color : 'purple',
     label :'accueil'
 }