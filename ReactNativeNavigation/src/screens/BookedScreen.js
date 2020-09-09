import React from 'react'
import { HeaderButtons, Item} from 'react-navigation-header-buttons'

import { useSelector } from 'react-redux'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'
import { THEME } from '../theme'


export const BookedScreen = ({navigation}) => {

    const openPostHandler = post => {
        navigation.navigate('Post',{ postId: post.id, date: post.date, booked: post.booked })
    }

    const bookedPosts = useSelector(state => state.post.bookedPosts)
  
   // const data = DATA.filter(post => post.booked)

    return (
        <PostList data={bookedPosts} onOpen={openPostHandler}/>
    )
}

BookedScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'Избранное',
    // headerStyle: {
    //     backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
    // },
    // headerTintColor: Platform.OS === 'android' ? "#fff" : THEME.MAIN_COLOR,
    
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                        <Item 
                        title="Toogle Drawer" 
                        iconName='ios-menu' 
                        onPress={() => navigation.toggleDrawer()}/>
                     </HeaderButtons>),
})

