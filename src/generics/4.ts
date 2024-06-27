type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  const defaultUser: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  const updatedUser: User = { ...defaultUser, ...initialValues };

  return updatedUser;
}

const user = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

export {};
