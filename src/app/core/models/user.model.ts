export interface User {
  _id: number | string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  street: string;
  city: string;
  country: string;
  zipCode?: string;
}
