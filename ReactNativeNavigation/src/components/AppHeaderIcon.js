import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import { THEME } from '../theme'
import { Ionicons } from '@expo/vector-icons'

export const AppHeaderIcon = props => <HeaderButton 
{...props}
iconSize={24} 
IconComponent={Ionicons}
color={Platform.OS === 'andrpoid' ? '#fff' : THEME.MAIN_COLOR}

/>

const styles = StyleSheet.create({})
