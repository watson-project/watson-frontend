![Logo](src/assets/logo-hero.png)
# The Watson
The Watson is an open source, blog style website with support for text and images. Free from intrusive advertisements and clunky UI's, The Watson is the place where you can shout to the masses and be heard. Keeping mantra free, every article is able viewable, editable, and removable by all logged in users.

> The Watson - Share the Future

https://the-watson.netlify.app/

  ### Scrum manager/project manager
  > David Gales

## Members
> Michel Pathinvo, Joey Chang, Landon Spell, David Gales

## Installation Instructions:

### To Edit:

- Fork repository (optional)
- Clone down repository
- Run "npm -i" to download dependencies
- Checkout 'dev' branch
- Open in code editor

### To View:

- (With code installed)
- Run 'npm start'
- Navigate to localhost:3000/ in browser
- :D



# User stories

### MVP:

- As a user, I want to be able to see the most read articles in the first page of the desktop or mobile version of the application
- As a user, I want to be able to add an article, edit it, and delete it anytime
- As a user, I want to be able to illustrate my post with a photo
- As a user, I want to be able to add a title and my name to my article
- As a user, I want to be able to view an an article when clicked

### Stretch Goals:

- As a user, I would like to see a carousel that allows users to view different articles on the homepage
- As a user, I would like to see the time-stamp of an article when it was last updated
- As a user, I would like to see a modal pop-up when I hit the “delete” for an article so I don’t accidentally delete an article without confirmation
- As a user, I would like to search for specific articles

### Super Stretch Goals:

- As a user, I want to be able to have my own account to be able to post blogs without having to type my name/info
- As a user, I want to be able to “like” posts and save to a favorites component.
- As a user, I would like to make a comment onto an article
- As a user, I would like to be able to click on an author to see all of their articles

## List of models and their properties:

Article Model:
```js
[
  {
    title: String,
    author: String,
    time: new Date(),
    photo_url: String,
    content: String,
  },
]
```

# Wireframes:

### Mobile:

#### Main Page:

<img src="https://media.git.generalassemb.ly/user/39424/files/09f1e400-7d3c-11ec-9c96-1217744d6725" alt="Main Page" width="250px"/>

#### Story Feed:

<img src="https://media.git.generalassemb.ly/user/39424/files/1fffa480-7d3c-11ec-8434-b6fdcda81c4d" alt="Main Page" width="250px"/>

#### Individual Story:

<img src="https://media.git.generalassemb.ly/user/39424/files/2d1c9380-7d3c-11ec-986f-741c7ad3e710" alt="Main Page" width="250px"/>

#### Add A Story:

<img src="https://media.git.generalassemb.ly/user/39424/files/3d347300-7d3c-11ec-944e-0bdc445299e4" alt="Main Page" width="250px"/>

#### Edit A Story:

<img src="https://media.git.generalassemb.ly/user/39424/files/47567180-7d3c-11ec-86ea-17fbc3a0deff" alt="Main Page" width="250px"/>

### Desktop:

#### Main Page:

![D_Main Page](https://media.git.generalassemb.ly/user/39424/files/8f759400-7d3c-11ec-9ca0-cc4ba5387f5a)

#### Story Feed:

![D_Story Feed](https://media.git.generalassemb.ly/user/39424/files/969ca200-7d3c-11ec-8333-91bb649b3811)

#### Individual Story:

![D_Story_2](https://media.git.generalassemb.ly/user/39424/files/9a302900-7d3c-11ec-93ef-9efdb32a743d)

#### Add A Story:

![D_Add A Story](https://media.git.generalassemb.ly/user/39424/files/9c928300-7d3c-11ec-876d-3e3dd2974d29)

#### Edit A Story:

![D_Edit A Story](https://media.git.generalassemb.ly/user/39424/files/9f8d7380-7d3c-11ec-9423-0976af32b803)
