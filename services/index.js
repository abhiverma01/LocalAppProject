import AsyncStorage from "@react-native-async-storage/async-storage";

export const URL = "https://testapi.getlokalapp.com/common/jobs?page=1";

export const AddToBookMarks = async (value) => {
  try {
    const jsonValue = await AsyncStorage.getItem("bookmarks");
    const bookmarks = jsonValue != null ? JSON.parse(jsonValue) : [];

  
    const bookmarkExists = bookmarks.some(
      (bookmark) => bookmark.id === value.id
    );

    if (!bookmarkExists) {
    
      bookmarks.push(value);
      await AsyncStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      console.log("Bookmark added successfully!");
    } else {
      console.log("Bookmark already exists!");
    }
  } catch (e) {
    console.error("Failed to add bookmark:", e);
  }
};

export const fetchBookmarks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("bookmarks");

    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error("Failed to fetch bookmarks:", e);
    return [];
  }
};
