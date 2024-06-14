import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}> 
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">About Donkey Diary</ThemedText>
      </ThemedView>
      <ThemedText>This app includes example code to help you get started.</ThemedText>
      <Collapsible title="Functionalities of system">
        <ThemedText>
        <ThemedText type="defaultSemiBold">1. Identify Donkey </ThemedText>
Purpose: Allows users to upload or capture a photo of a donkey to identify specific characteristics or retrieve related information.
Functionality: Users can either take a picture using their device’s camera or upload an image from their gallery. The app then processes this image to provide details about the donkey.  

2. Donkey Database
Purpose: Offers access to a searchable database of donkeys, including historical data and specifics of each registered animal.
Functionality: Users can search for donkeys by various filters such as name, age, or location. The database can be browsed or searched through for specific information on individual donkeys.
3. Health Tips
Purpose: Provides users with tips and best practices for the care and health management of donkeys.
Functionality: This section includes articles, videos, and guidelines on donkey health care, diet, exercise, and preventive measures for common diseases.
4. Community
Purpose: Enables users to connect with other donkey owners and enthusiasts, fostering a community around donkey care and management.
Functionality: Features forums, discussion boards, and social sharing capabilities where users can exchange advice, stories, and experiences related to donkey care.
5. Offline Functionality
Purpose: Ensures the app remains functional even without an internet connection.
Functionality: Key features like the identification tool and the health tips section are available offline. Data such as newly identified donkeys or updated information can be stored locally and synchronized with the cloud server once the device connects to Wi-Fi.
6. Data Synchronization
Purpose: Keeps the local data and remote server data in sync, ensuring accuracy and up-to-dateness.
Functionality: Automatic syncing happens when the device connects to Wi-Fi, updating both the local database and the server with the latest information without user intervention.
7. User-Friendly Design
Purpose: To provide a seamless and intuitive user experience.
Functionality: The app features a simple, clean interface with large buttons and easy navigation. It is designed to be accessible, with features like readable text sizes and clear icons.
          
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Technical aspects">
        <ThemedText>
        The app is built using React Native, facilitating cross-platform functionality (iOS and Android).
It utilizes SQLite for local database storage, Realm or WatermelonDB for advanced local data handling and synchronization.
React Navigation is used for handling navigation between different screens within the app.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <ThemedText>
          For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
          different screen densities
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <ThemedText>
          Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            custom fonts such as this one.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText> library
          to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
