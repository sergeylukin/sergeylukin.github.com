---
layout: post
tags: 
title: "Ruby on Rails: Migrate from SQLite to PostgreSQL on FreeBSD"
---

Install server/client:

```
cd /usr/ports/databases/postgresql92-server
make install clean
```

Install contrib (you will need this for extensions, more details
[here](http://www.postgresql.org/docs/devel/static/contrib.html) ):

```
cd /usr/ports/databases/postgresql92-contrib
make install clean
```

```
echo 'postgresql_enable="YES"' >> /etc/rc.conf
```

```
/usr/local/etc/rc.d/postgresql initdb
```

```
/usr/local/etc/rc.d/postgresql start
```

```
su pgsql
createuser -sdrP jondoe
```

Replace `gem sqlite3` to `gem pg` in Gemfile and execute `bundle` to install
new Gem

Open `config/database.yml` and replace following:

```
development:
  adapter: sqlite3
  database: db/development.sqlite3
  pool: 5
  timeout: 5000
test:
  adapter: sqlite3
  database: db/test.sqlite3
  pool: 5
  timeout: 5000
production:
  adapter: sqlite3
  database: db/production.sqlite3
  pool: 5
  timeout: 5000
```

with:

```
development:
  adapter: postgresql
  encoding: unicode
  database: blog_development
  pool: 5
  timeout: 5000
  username: jondoe
  password:

test:
  adapter: postgresql
  encoding: unicode
  database: blog_test
  pool: 5
  timeout: 5000
  username: jondoe
  password:

production:
  adapter: postgresql
  encoding: unicode
  database: blog_production
  pool: 5
  timeout: 5000
  username: blog
  password: 123456
```

Now execute `rake db:create:development` and `rake db:reate:test`


Install Taps: `gem install taps`

Open server:

```
taps server sqlite://db/development.sqlite3 puller secret
```

You will get output similar to following:

```
== Sinatra/1.0 has taken the stage on 5000 for production with backup from
WEBrick
...
```

Which tell you that Taps server is waiting on port 5000. Let's
pull from it to our PostgreSQL database:

```
taps pull postgres://jondoe@localhost/blog_development http://puller:secret@localhost:5000
```

Restart Rails server and you should be already running your app with PostgreSQL
server.
