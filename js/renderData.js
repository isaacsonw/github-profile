// get user name
const renderUserprofileData = (data) => {
  const renderUserName = () => {
    if (data.username) {
      // create  your elements
      let [userNameHeaderTag, userNameTag] = createElementCall(['H1', 'SPAN']);
      // create a textnode out from the username and append it to the span tag
      userNameTag.appendChild(document.createTextNode(data.username));
      // Attatch the span tag to the h1 tag
      userNameHeaderTag.appendChild(userNameTag).className = 'fullName';
      // Attatch the h1 tag to the name element
      return getElementByClassOrId('name').appendChild(userNameHeaderTag);
    }
  };
  renderUserName();

  // render user handle
  const renderUserHandle = () => {
    if (data.userhandle) {
      // create  your elements
      let [userHandleSpanTag] = createElementCall(['SPAN']);
      // attatch the userhandle create text nnode to the span tag
      userHandleSpanTag.appendChild(document.createTextNode(data.userhandle));
      // get the already created h1 tag inside the name elment
      return (getElementByClassOrId('name').appendChild(
        // return (getElementByClassOrId("name").children[0].appendChild(
        userHandleSpanTag
      ).className = 'profile-handle');
    }
  };
  renderUserHandle();

  // render user bio
  const renderUserBio = () => {
    if (data.bio) {
      // create  your elements
      let [headerTwo] = createElementCall(['H2']);
      // attatch the user bio to the h2 tag
      headerTwo.appendChild(document.createTextNode(data.bio));
      // attatch the h2 tag to my-profile-bio elemnt
      return getElementByClassOrId('my-profile-bio').appendChild(headerTwo);
    }
  };
  renderUserBio();

  // render user avater
  const renderUserAvater = () => {
    if (data.profileImage) {
      // create  your elements
      let [userAvatarImage] = createElementCall(['IMG']);
      // assign the img a src and attatch the img to the profile-image element
      return (getElementByClassOrId('profile-image').appendChild(
        userAvatarImage
      ).src = data.profileImage);
    } else
      return (getElementByClassOrId('profile-image').appendChild(
        userAvatarImage
      ).src = '../assets/me.jpeg');
  };
  renderUserAvater();

  // render userfollowers count
  const renderUserFoloowersCount = () => {
    if (data.followerCount && data.followerCount > 0) {
      // create  your elements
      let [
        followersCountBoldTag,
        icon,
        iconWrap,
        followersCountLinkTag,
        conatiner,
      ] = createElementCall(['B', 'DIV', 'DIV', 'A', 'DIV']);
      // create the followers icon
      icon.className = 'followersicon';
      iconWrap.className = 'followersicon-wrap';
      iconWrap.appendChild(icon);
      // append the count value to a b tag
      followersCountBoldTag.appendChild(
        document.createTextNode(data.followerCount)
      );
      followersCountBoldTag.className = 'following-count';
      //append the iconWrap, the b tag and follower text to the conatiner div tag
      conatiner.className = 'flex followers followersOnly';
      conatiner.appendChild(iconWrap);
      conatiner.appendChild(followersCountBoldTag);
      conatiner.innerHTML += 'followers';
      // append the conatiner div tag to the a tag
      followersCountLinkTag.appendChild(conatiner);
      followersCountLinkTag.href = '#';
      // if the foloowerscount is > 0, render the followers count
      return getElementByClassOrId('followings').appendChild(
        followersCountLinkTag
      );
    }
  };
  renderUserFoloowersCount();

  // render userFollowing count
  const renderUserFoloowingCount = () => {
    if (data.following && data.following > 0) {
      // create  your elements
      let [followingCountTag, followingCountLinkTag, followingCountContainer] =
        createElementCall(['B', 'A', 'DIV']);
      // append the  following count to the b tag
      followingCountTag.appendChild(document.createTextNode(data.following));
      followingCountTag.className = 'following-count';
      //create the anchor tag linking the 'following' and append a div to it
      followingCountContainer.appendChild(followingCountTag);
      followingCountContainer.className = 'flex followers following';
      followingCountContainer.innerHTML += 'following';
      followingCountLinkTag.appendChild(followingCountContainer);
      followingCountLinkTag.href = '#';

      // if the foloowingCount is > 0, render the followers count
      return (
        (getElementByClassOrId('followings').innerHTML += '.'),
        getElementByClassOrId('followings').appendChild(followingCountLinkTag),
        (getElementByClassOrId('followings').innerHTML += '.')
      );
    }
  };
  renderUserFoloowingCount();

  // render number of starred repos
  const renderStarredRepos = () => {
    if (data.starredRepoCount && data.starredRepoCount > 0) {
      // create your elements
      let [starredContainer, starredBoldTag, starredLinkTag] =
        createElementCall(['DIV', 'B', 'A']);

      // attatch the star count to a b tag
      starredBoldTag.appendChild(
        document.createTextNode(data.starredRepoCount)
      );
      starredBoldTag.className = 'following-count';

      // attatch the star from component.js and the b tag to the container tag
      starredContainer.append(star(), starredBoldTag);
      starredContainer.className = 'flex followers starred';

      // attatch the conatiner to an a tag
      starredLinkTag.appendChild(starredContainer);
      starredLinkTag.href = '#';

      // if no of starred repos is > 0, return the starred count
      return getElementByClassOrId('followings').appendChild(starredLinkTag);
    }
  };
  renderStarredRepos();

  // render  company name
  const renderUserCompany = () => {
    if (data.company) {
      // create your elements
      const [
        companyListItem,
        companyIconWrap,
        companyIcon,
        companyNameSpanTag,
      ] = createElementCall(['LI', 'DIV', 'DIV', 'SPAN']);

      // create the company logo
      companyIconWrap.appendChild(companyIcon);
      companyIcon.className = 'companyicon';
      companyIconWrap.className = 'companyicon-wrap';

      // attatch the logo to the company name
      companyNameSpanTag.appendChild(document.createTextNode(data.company));
      companyListItem.append(companyIconWrap, companyNameSpanTag);
      companyListItem.className = 'flex';

      // return the li
      return getElementByClassOrId('location-details').children[0].appendChild(
        companyListItem
      );
    }
  };
  renderUserCompany();

  // render user location
  const renderUserLocation = () => {
    if (data.location) {
      // create your elements
      const [
        locationIconWrap,
        locationIcon,
        locationSpanTag,
        locationListItem,
      ] = createElementCall(['DIV', 'DIV', 'SPAN', 'LI']);

      // create the compay icon
      locationIconWrap.appendChild(locationIcon);
      locationIconWrap.className = 'locationicon-wrap';
      locationIcon.className = 'locationicon';

      // attatch the icon and company name to an li
      locationSpanTag.innerHTML = data.location;
      locationListItem.append(locationIconWrap, locationSpanTag);
      locationListItem.className = 'flex';

      // return the li
      return getElementByClassOrId('location-details').children[0].appendChild(
        locationListItem
      );
    }
  };
  renderUserLocation();
};

// render repositories data
const renderUserRepositories = (repos, data, callback) => {
  // check if there are any repos and create a ul for holding each repo content

  const renderReposStatus = () => {
    if (repos && repos.length > 0) {
      // create your elements

      let [repositoryCollection] = createElementCall(['UL']);
      repositoryCollection.className = 'repositories-list';

      // attach the ul to the repo body
      getElementByClassOrId('repositories-list').appendChild(
        repositoryCollection
      ).className = 'repositories-ul';
      return getElementByClassOrId('repositories-ul');
    }
  };

  // render the content of each repo
  const renderRepos = () => {
    if (repos) {
      repos.map((repo) => {
        // create your elements
        const [
          eachRepositoryCollection, //1
          repoDetails, //2
          repoNameMain, //3
          eachRepositoryName, //4
          repName, //5
          repoDescription, //6
          eachRepositoryDescription, // 7
          repoMore, //8
          language, //9
          starred, //10
          starrCount, //11
          createdAt, //12
          starMian, //13
          button, //14
          languageColor, //15
          buttonText, //15
          fork, //15
          forkCount, //15
          forkIcon, //15
          licenseInfo, //15
          licenseIconCover, //15
          licenseInfoText, //15
          licenseInfoIcon, //15
        ] = createElementCall([
          'LI', //1
          'DIV', //2
          'DIV', //3
          'H3', //4
          'A', //5
          'DIV', //6
          'P', // 7
          'DIV', //8
          'SPAN', //9
          'A', //10
          'SPAN', //11
          'SPAN', //12
          'DIV', //13
          'BUTTON', //14
          'SPAN', //1
          'SPAN', //16
          'A', //16
          'SPAN', //16
          'DIV', //16
          'SPAN', //16
          'DIV', //16
          'SPAN', //16
          'DIV', //16
        ]);
        // create the repo name
        repName.appendChild(document.createTextNode(repo.name));
        repName.href = '#';
        eachRepositoryName.appendChild(repName);
        repoNameMain.appendChild(eachRepositoryName);
        repoNameMain.className = 'repository-name';

        // create the repo description
        repo.description
          ? (eachRepositoryDescription.appendChild(
              document.createTextNode(repo.description)
            ),
            repoDescription.appendChild(eachRepositoryDescription),
            (repoDescription.className = 'repository-description'))
          : null;

        // create other info about a repo
        let currentLnaguage =
          repo.languages !== null
            ? repo.languages.nodes[repo.languages.nodes.length - 1]
            : null;
        currentLnaguage
          ? (language.append(
              languageColor,
              document.createTextNode(
                repo.languages.nodes[repo.languages.nodes.length - 1].name
              )
            ),
            (languageColor.style.backgroundColor =
              repo.languages.nodes[repo.languages.nodes.length - 1].color),
            // if language is not empty, add it to starred collection
            repoMore.appendChild(language),
            (language.className = 'language'))
          : null;
        // return star if the number of stars is > 0
        repo.stargazerCount
          ? ((starrCount.innerHTML = repo.stargazerCount),
            starred.appendChild(star()),
            // attatch the href  to the stars
            (starred.href = `/${data.userhandle}/${repo.name}/stargazers`),
            starred.appendChild(starrCount),
            repoMore.appendChild(starred))
          : null;
        // return fork if the number of forkCount is > 0
        repo.forkCount
          ? ((forkCount.innerHTML = repo.forkCount),
            fork.appendChild(forkIcon),
            (forkIcon.className = 'forkIcon'),
            // attatch the href  to the stars
            (fork.href = `/${data.userhandle}/${repo.name}/network/members
            `),
            fork.appendChild(forkCount),
            repoMore.appendChild(fork))
          : null;
        // return license if it exist
        repo.licenseInfo
          ? ((licenseInfoText.innerHTML = repo.licenseInfo.body.split('\n')[0]),
            licenseInfo.appendChild(licenseInfoIcon),
            licenseInfoIcon.appendChild(licenseIconCover),
            (licenseInfoIcon.className = 'licenseInfoIcon'),
            licenseInfo.appendChild(licenseInfoText),
            repoMore.appendChild(licenseInfo))
          : null;

        createdAt.appendChild(
          document.createTextNode(`Updated on ${callback(repo.updatedAt)}`)
        );
        repoMore.appendChild(createdAt);
        repoMore.className = 'repository-more';

        // merge the repo details
        repoDetails.append(repoNameMain, repoDescription, repoMore);
        repoDetails.className = 'repository-details';

        // create the button section
        buttonText.appendChild(
          document.createTextNode(repo.viewerHasStarred ? 'Unstar' : 'Star')
        );
        button.append(star(repo.viewerHasStarred), buttonText);

        // hnadle star and unstar a repo
        const starAndUnstarARepo = () => {
          button.children[0].children[3].classList.toggle('starred');
          button.children[0].children[4].classList.toggle('starred');
          button.children[0].children[5].classList.toggle('starred');
          // rerender the text content of the button
          return button.children[0].children[5].className.includes('starred')
            ? (button.children[1].innerHTML = 'Unstar')
            : (button.children[1].innerHTML = 'Star');
        };
        // attatch event handler to the button
        button.addEventListener('click', () => starAndUnstarARepo());
        starMian.appendChild(button);
        starMian.className = 'star-main flex';

        // merge the entire repo li content
        eachRepositoryCollection.append(repoDetails, starMian);
        eachRepositoryCollection.className = 'repository flex';
        return renderReposStatus().appendChild(eachRepositoryCollection);
      });
    }
  };
  renderRepos();
};

// display the number of repositories
const renderNoOfRepos = (repos) => {
  if (repos && repos.length > 0) {
    // create your element
    let [noOfReposSpanTag] = createElementCall(['SPAN']);

    // attatch the repo count to the created span tag
    noOfReposSpanTag.appendChild(document.createTextNode(repos.length));
    noOfReposSpanTag.className = 'repo-count';

    // set the span tag
    return getElementByClassOrId('allRepository').appendChild(noOfReposSpanTag);
  }
};

// render user profile image and userhandle on the header
const renderHeaderProfileImg = (data) => {
  // create your image element
  const [userImageDesktop, userImageMobile] = createElementCall(['IMG', 'IMG']);
  userImageDesktop.src = data.profileImage || '../assets/me.jpeg';
  userImageMobile.src = data.profileImage || '../assets/me.jpeg';

  return (
    // return user profile image on the header on desktop view
    getElementByClassOrId('menuProfileImgDTOP').appendChild(userImageDesktop),
    // return user profile image on the header on mobile view
    getElementByClassOrId('menuProfileImgMOBLE').appendChild(userImageMobile),
    // return userhandle on the header on mobile view
    getElementByClassOrId('menuProfileMOBLE').appendChild(
      document.createTextNode(data.userhandle)
    )
  );
};

const renderTabProfileOnScroll = (data) => {
  let profileStick = getElementByClassOrId('pinneedContent');

  // Observe the presence of the pinned profile card
  const observer = new IntersectionObserver(([element]) => {
    if (element.intersectionRatio > 0) {
      profileStick.style.cssText =
        'animation: appear .2s linear 0s  alternate-reverse forwards';
    } else {
      getElementByClassOrId('pinnedImg').src = data.profileImage;
      getElementByClassOrId('pinneedContent').children[1].innerHTML =
        data.userhandle;

      // animate the apearance of the container
      profileStick.style.cssText = 'animation: appear .2s linear 0s  forwards';
    }
  });

  observer.observe(getElementByClassOrId('profileStick'));
};
