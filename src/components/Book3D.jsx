import { BookCover } from "book-cover-3d";
import BookCoverPic from "../assets/BookCover.jpeg"

export const Book3D = () => {
  return (
    <BookCover>
      <img src={BookCoverPic} alt="Le Taxi Science"/>
    </BookCover>
  );
};
