FROM daocloud.io/library/nginx

RUN mkdir /usr/share/nginx/html/admin

COPY ./dist/bundle.js /usr/share/nginx/html/
COPY ./dist/vendor.bundle.js /usr/share/nginx/html/
COPY ./index.html /usr/share/nginx/html/
COPY ./dist/admin.bundle.js /usr/share/nginx/html/admin
COPY ./admin-index.html /usr/share/nginx/html/admin
COPY default.conf /etc/nginx/conf.d/



EXPOSE 80
EXPOSE 81





