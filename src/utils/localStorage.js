import toast from "react-hot-toast";

// Read Books
export const getReadBooks = () => {
  let readBooks = [];
  const localReadBooks = localStorage.getItem("readBooks");
  if (localReadBooks) {
    readBooks = JSON.parse(localReadBooks);
  }
  return readBooks;
};

export const setReadBook = (book) => {
  const localReadBooks = getReadBooks();
  const isExist = localReadBooks.find(
    (localReadBook) => localReadBook.bookId == book.bookId
  );
  if (isExist) {
    return toast.error(`This book is already in your 'Read' list!`);
  } else {
    localReadBooks.push(book);
    localStorage.setItem("readBooks", JSON.stringify(localReadBooks));
    toast.success(
      `Success! This book has been added to your 'Read' list. Enjoy your reading!`
    );
  }
};

// Wishlist Books
export const getWishListedBooks = () => {
  let wishListedBooks = [];
  const localWishListedBooks = localStorage.getItem("wishList");
  if (localWishListedBooks) {
    wishListedBooks = JSON.parse(localWishListedBooks);
  }
  return wishListedBooks;
};

export const setWishListBook = (book) => {
  const localWishListedBooks = getWishListedBooks();
  const isExistInWishList = localWishListedBooks.find(
    (localWishListedBook) => localWishListedBook.bookId == book.bookId
  );
  const readBooks = getReadBooks();
  const isExistInReadBookList = readBooks.find(
    (readBook) => readBook.bookId == book.bookId
  );

  if (isExistInWishList) {
    return toast.error(`This book is already on your 'Wishlist'!`);
  } else if (isExistInReadBookList) {
    return toast.error(
      `Notice: This book is already marked as 'Read.' You can't add it to your Wishlist.`
    );
  } else {
    localWishListedBooks.push(book);
    localStorage.setItem("wishList", JSON.stringify(localWishListedBooks));
    toast.success(
      `Great choice! This book has been added to your 'Wishlist.' You can come back to it later!`
    );
  }
};
