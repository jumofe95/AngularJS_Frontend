# Deploying Front-End application on apache server

$ cd /var/www/

$ sudo mkdir news.local

$ sudo chown -R $USER:$USER /var/www/news.local

$ sudo chmod -R 755 /var/www

$ cd /var/www/news.local

$ git clone https://github.com/jumofe95/Finametrix_Frontend.git .

$ sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/news.local.conf

#### Set this configuration: 
ServerAdmin webmaster@localhost  
DocumentRoot /var/www/news.local  
ServerName news.local  
ServerAlias www.news.local  
ErrorLog ${APACHE_LOG_DIR}/error.log  
CustomLog ${APACHE_LOG_DIR}/access.log combined 
#### Save and exit 


$ sudo a2ensite news.local.conf

$ sudo systemctl restart apache2
(or 
$ sudo service apache2 restart)

$ sudo nano /etc/hosts

#### Set this host: 
127.0.0.1       news.local
