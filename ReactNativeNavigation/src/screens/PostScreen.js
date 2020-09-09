import React, {useEffect , useCallback} from 'react'
import { StyleSheet, Text, View, Image, Button, ScrollView, Alert } from 'react-native'
import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import { useDispatch, useSelector} from 'react-redux'

import { THEME } from '../theme';
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { toogleBooked, removePost } from '../store/actions/post';

export const PostScreen = ({navigation}) => {

    const dispatch = useDispatch()

    const postId = navigation.getParam('postId');

    const post = useSelector(state => state.post.allPosts.find(p => p.id === postId))

    const booked = useSelector(state => 
        state.post.bookedPosts.some(post => post.id === postId))
    
    useEffect(() => {
        navigation.setParams({ booked })
    }, [booked])

    const toogleHandler = useCallback(() => {
        console.log(postId)
        dispatch(toogleBooked(postId))
    }, [dispatch, postId])

    useEffect(() => {
      navigation.setParams({toogleHandler})  
    }, [toogleHandler])

    

    // useEffect(() => {
    //     navigation.setParams({booked: post.booked})
    // }, [])

    const removeHandler = () => {
        Alert.alert(
            'Удаление поста',
            'Вы точно хотите удалить пост?',
            [ {
                text: 'Отменить',
                style: 'cancel'
              },
              { text: 'Удалить', style: 'destructive', onPress: () => {
                  navigation.navigate('Main')
                  dispatch(removePost(postId))
              } }
            ],
            { cancelable: false }
          );
    }

    if (!post){
        return null
    }

    return (
        <ScrollView>
            <Image source={{uri: post.img}} style={styles.image}/>
            <View style={styles.textWrap}>
                <Text style={styles.title}>{post.text}</Text>
            </View>
            <Button title='Удалить' color={THEME.DANGER_COLOR} onPress={removeHandler}/>
        </ScrollView>
    )
}

PostScreen.navigationOptions = ({navigation}) => {
    
    const date = navigation.getParam('date');
    const booked = navigation.getParam('booked');
    const toogleHandler = navigation.getParam('toogleHandler');
    const iconName = booked ? 'ios-star' : 'ios-star-outline'

    return {
        headerTitle: 'Пост от ' + new Date(date).toLocaleDateString(),
        headerRight: () => (<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                <Item 
                                title="Take photo" 
                                iconName={iconName}
                                onPress={toogleHandler}/>
                            </HeaderButtons>),
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10
    },
    title: {
        fontFamily: 'open-regular'
    },

})
