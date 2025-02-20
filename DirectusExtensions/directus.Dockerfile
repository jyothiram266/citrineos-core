FROM directus/directus:10.10.5

# Switch to root for installation steps
USER root

COPY tsconfig.build.json /directus

# Charging stations bundle setup
COPY charging-stations-bundle/tsconfig.json /directus/extensions/directus-extension-charging-stations-bundle/tsconfig.json
COPY charging-stations-bundle/package.json /directus/extensions/directus-extension-charging-stations-bundle/package.json
COPY charging-stations-bundle/src /directus/extensions/directus-extension-charging-stations-bundle/src

# Install and build the extension
RUN npm install --prefix /directus/extensions/directus-extension-charging-stations-bundle && \
    npm run build --prefix /directus/extensions/directus-extension-charging-stations-bundle

# Copy configuration
COPY /data/directus/ /directus
COPY directus-env-config.cjs /directus/config.cjs

# Create uploads directory and set permissions
RUN mkdir -p /directus/uploads && \
    chown -R node:node /directus/uploads && \
    chmod 755 /directus/uploads

# Switch back to node user
USER node