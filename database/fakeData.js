const faker = require('faker');
const mysql = require('mysql');


let userDataGenerator = function () {
  let userData = [
    ['A_Seagull', 'https://static-cdn.jtvnw.net/jtv_user_pictures/a_seagull-profile_image-4d2d235688c7dc66-70x70.png', 'https://static-cdn.jtvnw.net/jtv_user_pictures/da9d954d-8759-4325-a1ca-46d58c43c93d-profile_banner-480.png', 'Dark Souls III', '906030', '194']
  ];

  for (let i = 0; i < 100; i++) {
    let user = faker.fake("{{internet.userName}}, {{image.avatar}}, {{image.image}}, {{commerce.department}}, {{random.number}}, {{random.number}}");
    user.trim();
    userData.push(user.split(','));
  }


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


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'milenita1809!',
  database: 'users'
});


const insertDataToDatabase = function () {
  for (var i = 0; i < 100; i++) {
    let values = userDataGenerator();
    let sql = `INSERT INTO users (display_name, logo, profile_image_url, category, followers, following) VALUES ('${values[i].display_name}', '${values[i].logo}', '${values[i].profile_image}', '${values[i].category}', ${values[i].followers}, ${values[i].followings}) `;
    connection.query(sql, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
  console.log('Records inserted');
}


connection.connect(function (err) {
  if (err) {
    return console.error('error ' + err.message);
  }

  console.log('Connected to the MySQL server. ');
  insertDataToDatabase();
});

