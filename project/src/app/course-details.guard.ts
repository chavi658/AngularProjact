// import { CanActivateFn } from '@angular/router';

// export const courseDetailsGuard: CanActivateFn = (route, state) => {

//   const user = sessionStorage.getItem("user")
//   if(user){
//     return true
//   }
//   return false
// };
//first
// import { CanActivateFn } from '@angular/router';

// export const courseDetailsGuard: CanActivateFn = (route, state) => {
//   const userData = sessionStorage.getItem("user");
//   if (userData !== null) {
//     const user = JSON.parse(userData);
//     if (user) {
//       // כאן אתה יכול לבצע פעולות נוספות עם המשתמש שנמצא ב-sessionStorage אם תרצה
//       return true;
//     }
//   }
//   return false;
// };
// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class courseDetailsGuard implements CanActivate {

//   constructor(private router: Router) {}

//   canActivate(): boolean {
//     // בדיקה האם המשתמש הוא מרצה על פי הנתונים שב-sessionStorage
//     const lecturerId = sessionStorage.getItem('lecturerId');
//     const userId = sessionStorage.getItem('userId');
    
//     if (lecturerId !== userId) {
//       // אם המשתמש אינו מרצה, מנע גישה לקומפוננטה והפנה אותו לדף אחר;
//       return false;
//     }
    
//     return true;
//   }
// }
// //lecturer adi



