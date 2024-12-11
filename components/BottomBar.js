import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import WebviewCom from './WebviewCom';
import Blog from '../assets/blog.svg';
import Github from '../assets/github.svg';
import Portfolio from '../assets/portfolio.svg';
import WebviewBlog from './WebviewBlog';
import WebviewPort from './WebviewPort';

const Tab = createBottomTabNavigator();

function BottomGithub() {
    return <WebviewCom />;
}

function BottomBlog() {
    return <WebviewBlog />;
}

function BottomPortfolio() {
    return <WebviewPort />;
}


const BottomBar = () => {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
            headerShown: false,
        })}
    >
      <Tab.Screen
        name="Home"
        component={BottomGithub}
        options={{
          title: 'Github',
          tabBarIcon: () => <Github />
        }}
      />
      <Tab.Screen
        name="Search"
        component={BottomBlog}
        options={{
          title: 'Blog',
          tabBarIcon: () => <Blog />
        }}
      />
      <Tab.Screen
        name="Notification"
        component={BottomPortfolio}
        options={{
          title: 'Portfolio',
          tabBarIcon: () => <Portfolio />
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomBar

const styles = StyleSheet.create({})