import React from 'react';
import {CustomPicture} from "../CustomPicture";

export default {
    component: CustomPicture,
    title: 'Custom Picture Stories',
};
const profile_image = {
    small: "https://images.unsplash.com/profile-1578964332567-ad65cf92e5d9image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
    medium: "https://images.unsplash.com/profile-1578964332567-ad65cf92e5d9image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
    large: "https://images.unsplash.com/profile-1578964332567-ad65cf92e5d9image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
}
export const customPictureStories = () => (
    <CustomPicture image={profile_image} type={'profile'} width={90} heigth={90}/>
);