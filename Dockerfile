FROM httpd:2.4

# Copy Apache configuration
COPY ./docker/conf/httpd.conf /usr/local/apache2/conf/httpd.conf
COPY ./docker/conf/httpd-ssl.conf /usr/local/apache2/conf/extra/httpd-ssl.conf

# Copy key and certificate for HTTPS
COPY ./docker/certs/server.key /usr/local/apache2/conf/
COPY ./docker/certs/server.crt /usr/local/apache2/conf/

# Clean up and copy Angular app
RUN rm -r /usr/local/apache2/htdocs/*
COPY ./client/dist/ /usr/local/apache2/htdocs/

# Copy .htaccess to avoid routing problems
COPY ./docker/conf/.htaccess /usr/local/apache2/htdocs