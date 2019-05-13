const faker = require('faker');
const db = require('./index.js');

let userDataGenerator = function () {
  let userData = [];
  for (let i = 0; i < 10; i++) {
    let user = faker.fake("{{internet.userName}},{{image.avatar}},{{image.image}},{{commerce.department}},{{random.number}},{{random.number}}");
    user.trim();
    userData.push(user.split(','));
  }

  // console.log(userData)
  let results = userData.map(arr => {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) obj['display_name'] = arr[0];
      if (i === 1) obj['logo'] = arr[1];
      if (i === 2) obj['profile_image'] = arr[2];
      if (i === 3) obj['category'] = arr[3];
      if (i === 4) obj['followers'] = Number(arr[4]);
      if (i === 5) obj['followings'] = Number(arr[5]);
    }
    return obj
  });

  return results;
};

const insertDataToDatabase = function () {
  console.log('starting records', new Date())
  for (var i = 0; i < 10; i++) {
    let values = userDataGenerator();
    let sql = `INSERT INTO users (display_name, logo, profile_image_url, category, followers, following) VALUES ('${values[i].display_name}', '${values[i].logo}', '${values[i].profile_image}', '${values[i].category}', ${values[i].followers}, ${values[i].followings}) `;
    db.connection.query(sql, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
  console.log('Records inserted', new Date ());
}

  insertDataToDatabase();
