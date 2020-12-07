import React from 'react';
import moment from 'moment';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { CalendarIcon } from '../../assets';

const SingleBlogScreen = ({route, navigation}) => {

  const {data} = route.params;

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ overflow: 'hidden'}}>
            <View>
              <Image
                source={data.banner}
                style={{ height: 250, width: '100%' }}
              />
            </View>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>{data.title}</Text>
            </View>
            <View style={styles.tinyInfo}>
              <Text style={styles.publisher}>Published by : Rizki</Text>
              <View style={styles.postDateWrapper}>
                <CalendarIcon width={16} height={16} fill="#ababab" />
                <Text style={styles.postDate}>
                  {moment(data.post_date, "DD/MM/YYYY").format("DD MMM YYYY")}
                </Text>
              </View>
            </View>
          </View>
          { data.paragraph ? data.paragraph.map((paragraph, sidx) => (
            <View style={styles.paragraphWrapper} key={`tips-${data.id}-${sidx}`}>
              { paragraph.title ? 
                <Text style={styles.paragraphTitle(paragraph.title)}>
                  {paragraph.title}
                </Text>
              : null }
              { paragraph.image ? 
                <View style={{ overflow: 'hidden', marginTop: 10, marginBottom: 20}}>
                  <View>
                    <Image
                      source={paragraph.image}
                      style={{ height: 250, width: '100%' }}
                    />
                  </View>
                </View>
              : null }
              <Text style={styles.paragraphContent}>
                {paragraph.content}
              </Text>
            </View>
          )) 
          : null }
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SingleBlogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    bottom: 40
  },
  contentWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  mainBanner: {
    overflow: 'hidden',
    height: 300,
    resizeMode: 'cover',
  },
  bannerWrapper: {
		height: 100,
		flex: 2
	},
	bannerImage: {
		resizeMode: 'contain'
	},
	titleWrapper: { 
    paddingHorizontal: 20, 
    paddingTop: 20,
		width: "100%" 
	},
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  tinyInfo: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 25,
  },
  postDateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postDate: {
    marginLeft: 8,
    fontSize: 16,
    paddingTop: 2,
    color: "#949494"
  },
  publisher: {
    fontSize: 16,
    paddingTop: 2,
    color: "#949494"
  },
  paragraphWrapper: {
    paddingHorizontal: 20 
  },
  paragraphTitle:(hasTitle) => ({ 
    marginBottom: hasTitle ? 12 : 6,
    marginTop: hasTitle ? 14 : 0,
    fontSize: 20,
    fontWeight: "600"
  }),
  paragraphContent: {
    marginBottom: 12,
    fontSize: 17,
    textAlign: 'justify',
    lineHeight: 24
  }
});
