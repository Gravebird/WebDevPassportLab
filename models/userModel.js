const database = [
  {
    id: 1,
    name: "Jimmy Smith",
    email: "jimmy123@gmail.com",
    password: "jimmy123!",
    role: "user",
  },
  {
    id: 2,
    name: "Johnny Doe",
    email: "johnny123@gmail.com",
    password: "johnny123!",
    role: "admin",
  },
  {
    id: 3,
    name: "Jonathan Chen",
    email: "jonathan123@gmail.com",
    password: "jonathan123!",
    role: "user",
  },
];

const userModel = {
  findOne: (email) => {
    const user = database.find((user) => user.email === email);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with email: ${email}`);
  },
  findById: (id) => {
    const user = database.find((user) => user.id === id);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with id: ${id}`);
  },
  findOrCreate: (profile) => {
    //console.log(`profile.theID: ${profile.githubId}`);
    //console.log(profile);
    const user = database.find((user) => user.id === profile.githubId);
    if (user) {
      return user;
    }
    
    //console.log(`profile.githubID: ${profile.githubId}`);
    let createdUser = {id: profile.githubId, name: profile.githubName, role: "user"};
    database.push(createdUser);
    console.log(`database is ${database}`);
    return createdUser;
  },
};


module.exports = { database, userModel };
