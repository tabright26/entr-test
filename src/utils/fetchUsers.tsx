import axios from "axios";

import { User } from "../types/types";

const API_URL = "http://localhost:8099";

const USER_END_POINTS = ["/users/kids", "/users/adults", "/users/seniors"];

type InputUser = {
  name: {
    firstName: string;
    lastName: string;
  };
  age: number;
};

const isInAgeRange = (min: number, max: number, user: InputUser) => {
  if (min !== -1 && min > user.age) {
    return false;
  }
  if (max !== -1 && max < user.age) {
    return false;
  }
  if (!user.name.firstName || !user.name.lastName || !user.age) {
    return false;
  }
  return true;
};

export const fetchUsers = async (min: number, max: number) => {
  var users: User[] = [];

  for (let endpoint of USER_END_POINTS) {
    try {
      let {
        data: { data },
      } = await axios.get(API_URL + endpoint);

      users = users.concat(
        data
          .filter((e: InputUser) => isInAgeRange(min, max, e))
          .map((e: InputUser) => ({
            name: `${e.name.firstName} ${e.name.lastName}`,
            age: e.age,
          }))
      );
    } catch (err) {
      console.error(`Failed to fetch users from "${endpoint}" endpoint`);
    }
  }

  return users;
};
