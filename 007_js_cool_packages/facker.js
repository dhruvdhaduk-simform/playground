import { fakerEN_IN } from '@faker-js/faker';

function createRandomUser() {
    return {
        userId: fakerEN_IN.string.uuid(),
        username: fakerEN_IN.internet.username(),
        userAgent: fakerEN_IN.internet.userAgent(),
        email: fakerEN_IN.internet.email(),
        avatar: fakerEN_IN.image.avatar(),
        gitHubAvatar: fakerEN_IN.image.avatarGitHub(),
        password: fakerEN_IN.internet.password(),
        birthdate: fakerEN_IN.date.birthdate(),
        status: fakerEN_IN.internet.emoji(),
    };
}

// console.log(createRandomUser());


setInterval(() => {
    console.clear();

    console.log(createRandomUser());
}, 1000);
