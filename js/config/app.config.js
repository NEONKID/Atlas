define(['optional!config/local.config'], function (localConfig) {
	var config = {};
	if (JSON.stringify(localConfig) == JSON.stringify({})) {
		console.warn('Local configuration not found.  Using default values. To use a local configuration and suppress 404 errors, create a file called config/local.config.js under the /js directory');
	}

	// default configuration
	config.api = {
		name: 'Local',
		url: 'http://localhost:8080/WebAPI/'
  };
  config.cacheSources = false;
  config.pollInterval = 60000;
  config.useBundled3dPartyLibs = false;
	config.cohortComparisonResultsEnabled = false;
	config.userAuthenticationEnabled = false;
	config.plpResultsEnabled = false;
	config.useExecutionEngine = false;
	config.viewProfileDates = false;
  config.enableCosts = false;
	config.supportUrl = "https://github.com/ohdsi/atlas/issues";
	config.supportMail = "atlasadmin@your.org";
	config.authProviders = [
    {
      "name": "Windows",
      "url": "user/login/windows",
      "ajax": true,
      "icon": "fa fa-windows"
    },
    {
      "name": "Kerberos",
      "url": "user/login/kerberos",
      "ajax": true,
      "icon": "fa fa-windows"
    },
    {
      "name": "OpenID",
      "url": "user/login/openid",
      "ajax": false,
      "icon": "fa fa-openid"
    },
    {
      "name": "Google",
      "url": "user/oauth/google",
      "ajax": false,
      "icon": "fa fa-google"
    },
    {
      "name": "Facebook",
      "url": "user/oauth/facebook",
      "ajax": false,
      "icon": "fa fa-facebook"
    },
    {
      "name": "DB",
      "url": "user/login/db",
      "ajax": true,
      "icon": "fa fa-database",
      "isUseCredentialsForm":true
    },
    {
      "name": "LDAP",
      "url": "user/login/ldap",
      "ajax": true,
      "icon": "fa fa-cubes",
      "isUseCredentialsForm": true
    },
    {
      "name": "Active Directory LDAP",
      "url": "user/login/ad",
      "ajax": true,
      "icon": "fa fa-cubes",
      "isUseCredentialsForm": true
    }
  ];
  config.xssOptions = {
    "whiteList": {
      "a": ["href", "class", "data-bind"],
			"button": ["class", "type"],
      "span": ["class", "data-bind"],
      "i": ["class", "id", "aria-hidden"],
      "div": ["class", "style", "id"],
      "option": ["value"],
      "input": ["type", "class"],
      "ui": ["class"],
      "path": ["d", "class"],
      "br": "",
    },
    "stripIgnoreTag": true,
    "stripIgnoreTagBody": ['script'],
  };
  config.cemOptions = {
    "evidenceLinkoutSources": ["medline_winnenburg","splicer"],
    "sourceRestEndpoints": {
      "medline_winnenburg": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id={@ids}&retmode=json&tool=ohdsi_atlas&email=admin@ohdsi.org",
    },
    "externalLinks": {
      "medline_winnenburg": "https://www.ncbi.nlm.nih.gov/pubmed/{@id}",
      "splicer": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid={@id}"
    },
  };

	Object.assign(config, localConfig);
	config.webAPIRoot = config.api.url;
	return config;
});