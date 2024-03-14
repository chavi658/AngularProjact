// import { CanActivateFn } from '@angular/router';

// export const lecturerGuard: CanActivateFn = (route, state) => {
//   return true;
// };
import { CanActivateFn } from '@angular/router';
import { Course } from './course/Models/Course';

export const lecturerGuard: CanActivateFn = (route, state) => {
  // בדיקה האם קיים משתמש מחובר והאם הוא המרצה של הקורס
  const currentUserString = sessionStorage.getItem("user");
  const currentUser = currentUserString ? JSON.parse(currentUserString) : null;
  const course: Course = route.data['course']; // השימוש בתחום מחרוזת כדי לגשת למפתח 'course'

  if (!currentUser || currentUser.id !== course.lecturerId) {
    // אם אין משתמש מחובר או שהמשתמש אינו המרצה של הקורס, אז נביא false
    return false;
  }

  // אחרת, המשתמש מורשה לערוך את הקורס
  return true;
};


