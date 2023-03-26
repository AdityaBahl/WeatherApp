# Weather App

## **PROBLEM STATEMENT:**

Creating a Weather App integrated with Weather API.

## **MOTIVATION:**

Creating a weather app integrated with a weather API can be a great project for several reasons. Firstly, it provides easy accessibility to current and forecasted weather conditions for any location. Weather conditions can affect our daily lives, from planning outdoor activities to ensuring personal safety, and having an app that provides this information easily and conveniently can be invaluable.

Secondly, weather APIs provide a wealth of weather-related data that can be used to create a customized weather app. This allows developers to include features such as alerts, warnings, and personalized weather preferences to provide a more tailored user experience. Creating a weather app can also be a great learning opportunity for developers who want to learn more about APIs, data visualization, and app development.

Additionally, weather apps are practical tools that can be used by a wide range of users, from individuals planning their daily activities to businesses making weather-related decisions. Integration with other apps such as calendars, travel apps, and outdoor activity planners can provide a more comprehensive and personalized user experience.

## **WHY Weather app?**

A weather app is a useful tool that provides users with up-to-date weather information for their current location or any location of their choice. Here are some reasons why a weather app can be a useful tool:

Planning: A weather app can help users plan their activities and events based on the weather conditions. For example, users can decide whether to have an outdoor picnic or indoor movie night based on the weather forecast.

Safety: A weather app can help users stay safe by providing information on severe weather conditions such as thunderstorms, hurricanes, or tornadoes. This information can help users take necessary precautions and make informed decisions.

Convenience: A weather app provides users with easy access to weather information, without the need to search for it manually. Users can quickly check the weather before leaving home or work, or before planning their day.

Travel: A weather app can be especially useful for travelers who want to know the weather conditions in their destination city. This information can help travelers pack appropriate clothing and plan their itinerary accordingly.

Agriculture and Business: Weather conditions can have a significant impact on agriculture and business operations. A weather app can provide farmers and businesses with valuable information on weather conditions that can affect their operations, such as rainfall, temperature, and wind.

Overall, a weather app is a useful tool that can help users plan their activities, stay safe, and make informed decisions based on up-to-date weather information.

## **METHODS AND TOOLS REQUIRED**

This project was done using NLP (Natural Language Processing) techniques. Twitter receives over 500 million tweets per day, across the globe. Hence, our work is to retrieve the data and analyze it.

## **DEVELOPER ACCOUNT**

In order to fetch tweets through Twitter API, one needs to create a “TWITTER DEVELOPER ACCOUNT” from twitter developer portal and register an app through their twitter account.
![image](https://user-images.githubusercontent.com/90335449/179509023-22cfbfba-c43c-4f31-b9e3-abf5b5c8bf67.png)

Once the app is created, open the ‘Keys and Tokens’ tab, and copy ‘API Key’, ‘API Secret’, ‘Access token’ and ‘Access Token Secret’.
![image](https://user-images.githubusercontent.com/90335449/179509053-246a4466-0e2d-4b9f-a54f-7fbd5f008879.png)

**I carried out the following steps for the project:**</br>

1. Import libraries</br>
2. Tweets mining</br>
3. Data cleaning</br>
4. Tweets processing</br>
5. Data exploration</br>
6. Sentimental Analysis</br>
   ![image](https://user-images.githubusercontent.com/90335449/179509106-dc8aa6e2-dc40-49e2-83fd-611484869d84.png)

## **IMPORTING LIBRARIES**

Python libraries like :-

1. Tweepy :- for tweets mining
2. Pandas :- for data cleaning/manipulation
3. TextBlob :- for sentimental analysis
4. MatPlotlib :- Data exploration
5. WordCloud :- Data exploration
6. Re :- Regular expression, it lets you check is a particular string matches a given expression

### **TWEETS MINING**

Authorize twitter API client.

We use this code to fetch tweets, and filter the retweets and links after authorization of Twitter API.
![image](https://user-images.githubusercontent.com/90335449/179509143-89129b80-c12b-454f-b7b9-5b9c9374a3ce.png)

I created a dataframe using pandas library.

### **DATA CLEANING AND TWEETS PROCESSING**

Data cleaning is the process of fixing or removing incorrect, corrupted, incorrectly formatted, duplicate, or incomplete data within a dataset.
The ultimate goal is to clean up the individual tweets.
To remove the mentions, #, and emojis, I created a function cleanTxt(text) which uses re library.
![image](https://user-images.githubusercontent.com/90335449/179509190-d95b51c3-2012-4d88-accc-637c915f2271.png)

To make the cleaning more efficient, I converted all the tweets to lower case, removed the punctuation marks, or any irrelevant character and also removed stop words from the tokens, by using stop words library.
Stop words are the commonly used words which are irrelevant in text analysis like I, am, you, are, etc.
Additionally, I used a concept known as “Lemmatization”. This is a process of returning words to their “base” form. I implemented it using WordNetLemmatizer.

Note that, the more you clean your data, the more effective and accurate your result will be.

### **DATA EXPLORATION**

### **WORD CLOUD**

It is a visual representation of text data, which is often used to depict keyword metadata.
![image](https://user-images.githubusercontent.com/90335449/179509303-0c0bea02-ad77-4f8a-9ee9-968cb1025913.png)

Using the WordCloud library, you can generate a Word Cloud based on the word frequency and superimpose these words on any image. In this case, I used a rectangular block and Matplotlib to display the image. The Word Cloud shows, words with higher frequency in bigger text size while “not-so” common words are in smaller text sizes.
It can also be used to check whether our cleaning was successful or not, by taking a look at word cloud and seeing if the words make any sense or not.

### **SENTIMENTAL ANALYSIS**

For this analysis, I went with TextBlob. Text Blob analyzes sentences by giving each tweet a Subjectivity and polarity score. Based on the Polarity score, one can define which tweets were Positive, Negative, or Neutral.
Polarity simply means emotions expressed in a sentence. Emotions are closely related to sentiments. The strength of a sentiment is typically linked to the intensity of certain emotions, e.g., joy and anger.
Subjectivity, subjective sentence expresses some personal feelings, views, or beliefs. A subjective sentence may not express any sentiment.
I created two columns of subjectivity and polarity in my dataframe.
![image](https://user-images.githubusercontent.com/90335449/179509367-9736ec22-07c4-4eda-af12-1bf07181e7e1.png)

A polarity score of < 0 is Negative, 0 is Neutral while>0 is Positive. I used the “apply” method on the “Polarity” column in my dataframe to return the respective sentiment category. And create a column “Analysis”.
Now, subsequently analysis has been for all the positive/negative tweets or not.

### **POLARITY AND SUBJECTIVITY GRAPH**

![image](https://user-images.githubusercontent.com/90335449/179509400-3575b12d-0730-4a7b-888a-73f764b3231f.png)

### **CALCULATING THE PERCENTAGE AND NUMBER OF POSITIVE, NEGATIVE, NEUTRAL TWEETS**

![image](https://user-images.githubusercontent.com/90335449/179509415-bf1de545-d611-4a2c-823f-2e2e5211366e.png)

### **DISTRIBUTION OF SENTIMENTS CATEGORY**

![image](https://user-images.githubusercontent.com/90335449/179509446-7eb87bee-10c2-4b8f-852e-f13760a2c1d5.png)

### **PROJECT LIMITATIONS AND CHALLENGES**

Insufficient or limited word coverage as many new words and their semantics must be updated in the lexical database.
The accuracy of sentiment classification is also challenging task in sentimental analysis for example, words such as “love” and “hate” are on positive (+1) and negative (-1) scores in polarity. But there are in-between conjugations of words such as “not-so-bad” that can mean “neutral”.
Also, people use irony and sarcasm in casual conversations and memes on social media. The act of expressing negative sentiment using backhanded compliments can make it difficult for sentimental analysis tools to detect the true context of what the response is actually implying.

## **Conclusion**

I learned many new techniques and enjoyed the process. There were a lot of problems, but removing errors, yeah, that’s what we have to learn. The project may not give accurate results in some cases as mentioned above, and there are quite a few solutions too, I will definitely explore this domain further.

## **REFERENCES**

1. https://www.ijcaonline.org/research/volume125/number3/dandrea-2015-ijca-905866.pdf
2. https://textblob.readthedocs.io/en/dev/quickstart.html#sentiment-analysis
3. https://textblob.readthedocs.io/en/dev/_modules/textblob/en/sentiments.html
4. https://www.geeksforgeeks.org/twitter-sentiment-analysis-using-python/
5. https://towardsdatascience.com/step-by-step-twitter-sentiment-analysis-in-python-d6f650ade58d
