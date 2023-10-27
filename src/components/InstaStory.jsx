import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import InstaStory from "react-native-insta-story";

const data = [
  {
    user_id: 2,
    user_image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    user_name: "Omar Fathy",
    stories: [
      {
        story_id: 1,
        story_image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image:
          "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 2 swiped"),
      },
    ],
  },
  {
    user_id: 1,
    user_image:
      "https://res.cloudinary.com/docirki1d/image/upload/v1698149317/fiverr/no_avatar_zh6adx.png",
    user_name: "Ahmed Sobhy",
    stories: [
      {
        story_id: 1,
        story_image:
          "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image:
          "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
      },
    ],
  },
  {
    user_id: 1,
    user_image:
      "https://res.cloudinary.com/docirki1d/image/upload/v1698149317/fiverr/no_avatar_zh6adx.png",
    user_name: "Ahmed Sobhy",
    stories: [
      {
        story_id: 1,
        story_image:
          "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image:
          "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
      },
    ],
  },
  {
    user_id: 1,
    user_image:
      "https://res.cloudinary.com/docirki1d/image/upload/v1698149317/fiverr/no_avatar_zh6adx.png",
    user_name: "Ahmed Sobhy",
    stories: [
      {
        story_id: 1,
        story_image:
          "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image:
          "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
      },
    ],
  },
  {
    user_id: 1,
    user_image:
      "https://res.cloudinary.com/docirki1d/image/upload/v1698149317/fiverr/no_avatar_zh6adx.png",
    user_name: "Ahmed Sobhy",
    stories: [
      {
        story_id: 1,
        story_image:
          "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image:
          "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
      },
    ],
  },
  {
    user_id: 1,
    user_image:
      "https://res.cloudinary.com/docirki1d/image/upload/v1698149317/fiverr/no_avatar_zh6adx.png",
    user_name: "Ahmed Sobhy",
    stories: [
      {
        story_id: 1,
        story_image:
          "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image:
          "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
      },
    ],
  },
  {
    user_id: 1,
    user_image:
      "https://res.cloudinary.com/docirki1d/image/upload/v1698149317/fiverr/no_avatar_zh6adx.png",
    user_name: "Ahmed Sobhy",
    stories: [
      {
        story_id: 1,
        story_image:
          "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image:
          "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
      },
    ],
  },
  {
    user_id: 1,
    user_image:
      "https://res.cloudinary.com/docirki1d/image/upload/v1698149317/fiverr/no_avatar_zh6adx.png",
    user_name: "Ahmed Sobhy",
    stories: [
      {
        story_id: 1,
        story_image:
          "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image:
          "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
      },
    ],
  },
  {
    user_id: 1,
    user_image:
      "https://res.cloudinary.com/docirki1d/image/upload/v1698149317/fiverr/no_avatar_zh6adx.png",
    user_name: "Ahmed Sobhy",
    stories: [
      {
        story_id: 1,
        story_image:
          "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image:
          "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
      },
    ],
  },
  {
    user_id: 2,
    user_image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    user_name: "Omar Fathy",
    stories: [
      {
        story_id: 1,
        story_image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image:
          "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 2 swiped"),
      },
    ],
  },
];

const IStory = () => {
  const [seenStories, setSeenStories] = useState(new Set());

  // const updateSeenStories = ({ story: { story_id } }) => {
  //   setSeenStories((prevSet) => {
  //     prevSet.add(storyId);
  //     return prevSet;
  //   });
  // };

  // const handleSeenStories = async (item) => {
  //   console.log(item);
  //   const storyIds = [];
  //   seenStories.forEach((storyId) => {
  //     if (storyId) storyIds.push(storyId);
  //   });
  //   if (storyIds.length > 0) {
  //     await fetch("myApi", {
  //       method: "POST",
  //       body: JSON.stringify({ storyIds }),
  //     });
  //     seenStories.clear();
  //   }
  // };

  return (
    <>
      <Text style={styles.StoriesText}>Stories</Text>
      <InstaStory
        avatarSize={80}
        data={data}
        duration={10}
        onStart={(item) => console.log(item)}
        // onClose={handleSeenStories}
        // onStorySeen={updateSeenStories}
        renderCloseComponent={({ item, onPress }) => (
          <View style={{ flexDirection: "row" }}>
            {/* <Button onPress={shareStory}>Share</Button> */}
            {/* <Button onPress={onPress} title="X" /> */}
          </View>
        )}
        renderTextComponent={({ item, profileName }) => (
          <View>
            <Text>{profileName}</Text>
            <Text>{item.customProps?.yourCustomProp}</Text>
          </View>
        )}
        // style={{ marginTop: 10 }}
      />
    </>
  );
  // Readme;
  // Keywords;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  StoriesText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#344277",
    marginHorizontal: 20,
    marginVertical: 5,
  },
});

export default IStory;
