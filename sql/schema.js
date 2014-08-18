
module.exports = {
  roles: {
    id: {type: 'increments', nullable: false, primary: true},
    name: {type: 'string', nullable: false, maxlength: 32},
    created_at: {type: 'dateTime', nullable: false},
    updated_by: {type: 'integer', nullable: false, unsigned: true},
    updated_at: {type: 'dateTime', nullable: true}
  },

  users: {
    id: {type: 'increments', nullable: false, primary: true},
    role_id: {type: 'integer', nullable: false, unsigned: true, references: 'roles.id'},
    name: {type: 'string', maxlength: 150, nullable: false},
    last_name: {type: 'string', maxlength: 150, nullable: false},
    slug: {type: 'string', maxlength: 254, nullable: false, unique: true},
    email: {type: 'string', maxlength: 254, nullable: false, unique: true, validations: {'isEmail': true}},
    password: {type: 'string', maxlength: 254, nullable: false},
    resetPasswordToken: {type: 'string', maxlength: 254, nullable: false},
    resetPasswordExpires: {type: 'dateTime', nullable: false},
    gender: {type: 'string', maxlength: 8, nullable: true},
    location: {type: 'string', maxlength: 254, nullable: false},
    website: {type: 'text', maxlength: 2000, nullable: false, validations: {'isURL': true}},
    twitter: {type: 'string', maxlength: 150, nullable: false},
    github: {type: 'string', maxlength: 150, nullable: false},
    google: {type: 'string', maxlength: 150, nullable: false},
    about: {type: 'string', maxlength: 254, nullable: false},
    github_url: {type: 'text', maxlength: 2000, nullable: true, validations: {'isURL': true}},
    twitter_url: {type: 'text', maxlength: 2000, nullable: true, validations: {'isURL': true}},
    image_url: {type: 'text', maxlength: 2000, nullable: false},
    views: {type: 'integer', nullable: false, defaultTo: 0},
    created_at: {type: 'dateTime', nullable: false},
    updated_by: {type: 'integer', nullable: false, unsigned: true},
    updated_at: {type: 'dateTime', nullable: true}
  },

  tokens: {
    id: {type: 'increments', nullable: false, primary: true},
    user_id: {type: 'integer', nullable: false, unsigned: true, references: 'users.id'},
    kind: {type: 'string', nullable: false, maxlength: 32},
    accessToken: {type: 'string', maxlength: 254, nullable: false},
    tokenSecret: {type: 'string', maxlength: 254, nullable: true}
  },

  events: {
    id: {type: 'increments', nullable: false, primary: true},
    user_id: {type: 'integer', nullable: false, unsigned: true, references: 'users.id'},
    title: {type: 'string', maxlength: 150, nullable: false},
    slug: {type: 'string', maxlength: 254, nullable: false, unique: true},
    email: {type: 'string', maxlength: 254, nullable: false, validations: {'isEmail': true}},
    number: {type: 'string', maxlength: 24, nullable: false},
    short_desc: {type: 'string', maxlength: 128, nullable: false},
    markdown: {type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: true},
    html: {type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: true},
    dt: {type: 'date', nullable: false},
    start_time: {type: 'time', nullable: false},
    finish_time: {type: 'time', nullable: true},
    province: {type: 'string', maxlength: 64, nullable: false},
    city: {type: 'string', maxlength: 254, nullable: false},
    town: {type: 'string', maxlength: 254, nullable: false},
    address: {type: 'text', maxlength: 2000, nullable: false},
    lat: {type: 'string', nullable: false, maxlength: 32},
    lng: {type: 'string', nullable: false, maxlength: 32},
    url: {type: 'text', maxlength: 2000, nullable: true, validations: {'isURL': true}},
    website: {type: 'text', maxlength: 2000, nullable: true, validations: {'isURL': true}},
    views: {type: 'integer', nullable: false, defaultTo: 0},
    created_at: {type: 'dateTime', nullable: false},
    updated_by: {type: 'integer', nullable: false, unsigned: true},
    updated_at: {type: 'dateTime', nullable: true}
  },

  meetups: {
    id: {type: 'increments', nullable: false, primary: true},
    user_id: {type: 'integer', nullable: false, unsigned: true, references: 'users.id'},
    organiser: {type: 'string', maxlength: 254, nullable: false},
    title: {type: 'string', maxlength: 150, nullable: false},
    slug: {type: 'string', maxlength: 254, nullable: false, unique: true},
    email: {type: 'string', maxlength: 254, nullable: false, validations: {'isEmail': true}},
    number: {type: 'string', maxlength: 24, nullable: false},
    short_desc: {type: 'string', maxlength: 128, nullable: false},
    markdown: {type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: true},
    html: {type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: true},
    meetings: {type: 'string', maxlength: 150, nullable: false},
    province: {type: 'string', maxlength: 64, nullable: false},
    city: {type: 'string', maxlength: 254, nullable: false},
    town: {type: 'string', maxlength: 254, nullable: false},
    address: {type: 'text', maxlength: 2000, nullable: false},
    lat: {type: 'string', nullable: false, maxlength: 32},
    lng: {type: 'string', nullable: false, maxlength: 32},
    url: {type: 'text', maxlength: 2000, nullable: true, validations: {'isURL': true}},
    website: {type: 'text', maxlength: 2000, nullable: true, validations: {'isURL': true}},
    views: {type: 'integer', nullable: false, defaultTo: 0},
    image_url: {type: 'text', maxlength: 2000, nullable: false},
    created_at: {type: 'dateTime', nullable: false},
    updated_by: {type: 'integer', nullable: false, unsigned: true},
    updated_at: {type: 'dateTime', nullable: true}
  },


  categories: {
    id: {type: 'increments', nullable: false, primary: true},
    name: {type: 'string', maxlength: 150, nullable: false},
    slug: {type: 'string', maxlength: 150, nullable: false, unique: true},
    description: {type: 'string', maxlength: 200, nullable: true},
    created_at: {type: 'dateTime', nullable: false},
    updated_by: {type: 'integer', nullable: false, unsigned: true},
    updated_at: {type: 'dateTime', nullable: true}
  },


  posts: {
    id: {type: 'increments', nullable: false, primary: true},
    user_id: {type: 'integer', nullable: false, unsigned: true, references: 'users.id'},
    category_id: {type: 'integer', nullable: false, unsigned: true, references: 'categories.id'},
    title: {type: 'string', maxlength: 150, nullable: false},
    slug: {type: 'string', maxlength: 150, nullable: false, unique: true},
    markdown: {type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: true},
    html: {type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: true},
    image_url: {type: 'text', maxlength: 2000, nullable: true},
    featured: {type: 'bool', nullable: false, defaultTo: false},
    published: {type: 'bool', nullable: false, defaultTo: false},
    curated: {type: 'bool', nullable: false, defaultTo: false},
    meta_title: {type: 'string', maxlength: 150, nullable: true},
    meta_description: {type: 'string', maxlength: 200, nullable: true},
    views: {type: 'integer', nullable: false, defaultTo: 0},
    published_at: {type: 'dateTime', nullable: true},
    created_at: {type: 'dateTime', nullable: false},
    updated_by:{type: 'integer', nullable: false, unsigned: true},
    updated_at: {type: 'dateTime', nullable: true}
  },


  tags: {
    id: {type: 'increments', nullable: false, primary: true},
    name: {type: 'string', maxlength: 150, nullable: false},
    slug: {type: 'string', maxlength: 150, nullable: false, unique: true},
    description: {type: 'string', maxlength: 200, nullable: false},
    meta_title: {type: 'string', maxlength: 150, nullable: true},
    meta_description: {type: 'string', maxlength: 200, nullable: true},
    created_at: {type: 'dateTime', nullable: false},
    updated_by: {type: 'integer', nullable: false, unsigned: true},
    updated_at: {type: 'dateTime', nullable: true}
  },


  posts_tags: {
    id: {type: 'increments', nullable: false, primary: true},
    post_id: {type: 'integer', nullable: false, unsigned: true},
    tag_id: {type: 'integer', nullable: false, unsigned: true}
  },


  routes: {
    id: {type: 'increments', nullable: false, primary: true},
    role_id: {type: 'integer', nullable: false, unsigned: true, references: 'roles.id'},
    path: {type: 'string', maxlength: 150, nullable: false, unique: true},
    http_method: {type: 'string', maxlength: 12, nullable: false},
    controller_name: {type: 'string', maxlength: 150, nullable: false},
    controller_method: {type: 'string', maxlength: 150, nullable: false},
    published: {type: 'bool', nullable: false, defaultTo: true},
    created_at: {type: 'dateTime', nullable: false},
    updated_by: {type: 'integer', nullable: false, unsigned: true},
    updated_at: {type: 'dateTime', nullable: true}
  },


  menus: {
    id: {type: 'increments', nullable: false, primary: true},
    name: {type: 'string', maxlength: 150, nullable: false, unique: true},
    role_id: {type: 'integer', nullable: false, unsigned: true, references: 'roles.id'},
    description: {type: 'string', maxlength: 200, nullable: true},
    published: {type: 'bool', nullable: false, defaultTo: true},
    created_at: {type: 'dateTime', nullable: false},
    updated_by: {type: 'integer', nullable: false, unsigned: true},
    updated_at: {type: 'dateTime', nullable: true}
  },


  links: {
    id: {type: 'increments', nullable: false, primary: true},
    route_id: {type: 'integer', nullable: true, unsigned: true, references: 'routes.id'},
    menu_id: {type: 'integer', nullable: true, unsigned: true, references: 'menus.id'},
    parentId: {type: 'integer', nullable: true, unsigned: true},
    inner_text: {type: 'string', maxlength: 150, nullable: false},
    class_attr: {type: 'string', maxlength: 150, nullable: false},
    id_attr: {type: 'string', maxlength: 150, nullable: false},
    title: {type: 'string', maxlength: 150, nullable: true},
    target: {type: 'string', maxlength: 150, nullable: true},
    icon: {type: 'string', maxlength: 150, nullable: true},
    published: {type: 'bool', nullable: false, defaultTo: true},
    created_at: {type: 'dateTime', nullable: false},
    updated_by: {type: 'integer', nullable: false, unsigned: true},
    updated_at: {type: 'dateTime', nullable: true}
  }
};
