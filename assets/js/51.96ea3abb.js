(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{229:function(e,t,a){"use strict";a.r(t);var s={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},r=a(6),o=Object(r.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[a("h1",{attrs:{id:"👩‍💻-contributing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#👩‍💻-contributing","aria-hidden":"true"}},[e._v("#")]),e._v(" 👩‍💻 Contributing")]),e._v(" "),a("blockquote",[a("p",[e._v("Our small team truly appreciates every contribution made by our community: feature requests, bug reports, and especially pull requests!. If you have "),a("em",[e._v("any")]),e._v(" questions please reach out to our Core team on "),a("a",{attrs:{href:"https://slack.directus.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Slack"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"repositories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#repositories","aria-hidden":"true"}},[e._v("#")]),e._v(" Repositories")]),e._v(" "),a("p",[e._v("It is important to understand how our codebases are organized and why. Directus is decoupled, which means that the Application and API have separate codebases within two different GitHub repositories. Let's go through each of our main repositories in more detail.")]),e._v(" "),a("h3",{attrs:{id:"directus-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-api","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://github.com/directus/api",target:"_blank",rel:"noopener noreferrer"}},[e._v("directus/api"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("An API wrapper for custom SQL databases. It allows "),a("em",[e._v("projects")]),e._v(' to easily communicate with the SQL databases, and is the "engine" of the Directus Suite.')]),e._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Why are the App's extensions in the API?")]),e._v(" "),a("p",[e._v("You may be wondering why the App's extensionsare in the API codebase. Learn more about the reasoning for this in our "),a("router-link",{attrs:{to:"/extensions/architecture.html"}},[e._v("Architecture Explanation")]),e._v(".")],1)]),e._v(" "),a("h3",{attrs:{id:"directus-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-app","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://github.com/directus/app",target:"_blank",rel:"noopener noreferrer"}},[e._v("directus-app"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("An admin GUI for managing Directus API instances. It allows "),a("em",[e._v("humans")]),e._v(" to interact with the API, and wraps the API with a friendly user interface so that anyone can manage content through their web browser.")]),e._v(" "),a("h3",{attrs:{id:"directus-directus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-directus","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://github.com/directus/directus",target:"_blank",rel:"noopener noreferrer"}},[e._v("directus/directus"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("A readonly combined build of the API and App. There is no unique code here, it is simply a convenient way to install the Directus API, App, and all dependencies.")]),e._v(" "),a("h3",{attrs:{id:"directus-docs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-docs","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://github.com/directus/directus",target:"_blank",rel:"noopener noreferrer"}},[e._v("directus/docs"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("This is what you're looking at right now. It stores all of the Documentation for Directus in markdown files that are easily editable by the community. "),a("a",{attrs:{href:"https://docs.directus.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Our web Docs"),a("OutboundLink")],1),e._v(" are automatically generated from these files using "),a("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"directus-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus-docker","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://github.com/directus/docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("directus/docker"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("This is the code used to generate the official Docker images for Directus 7. These images are available through our "),a("a",{attrs:{href:"https://hub.docker.com/u/directus/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),a("OutboundLink")],1),e._v(" and can be accessed via: "),a("code",[e._v("docker pull directus/app")]),e._v(" and "),a("code",[e._v("docker pull directus/api")]),e._v("... the Dockerized combined build for Directus 7 is coming soon.")]),e._v(" "),a("h2",{attrs:{id:"simple-pull-requests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-pull-requests","aria-hidden":"true"}},[e._v("#")]),e._v(" Simple Pull Requests")]),e._v(" "),a("p",[e._v('Before we get into the full-blown "proper" way to do a pull request, let\'s quickly cover an easier method you can use for '),a("em",[e._v("small")]),e._v(" fixes. This way is especailly useful for fixing quick typos in the docs, but is not as safe for code changes since it bypasses validation and linting.")]),e._v(" "),a("ol",[a("li",[e._v("Sign in to GitHub")]),e._v(" "),a("li",[e._v("Go to the file you want to edit (eg: "),a("a",{attrs:{href:"https://github.com/directus/docs/blob/master/feature-requests.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("this page"),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("li",[e._v('Click the pencil icon to "Edit this file"')]),e._v(" "),a("li",[e._v("Make any changes")]),e._v(" "),a("li",[e._v('Describe and submit your changes within "Propose file change"')])]),e._v(" "),a("p",[e._v("That's it! GitHub will create a fork of the project for you and submit the change to a new branch in that fork. Just remember to submit separate pull requests when solving different problems.")]),e._v(" "),a("h2",{attrs:{id:"proper-pull-requests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proper-pull-requests","aria-hidden":"true"}},[e._v("#")]),e._v(" Proper Pull Requests")]),e._v(" "),a("p",[a("em",[e._v("Loosely based on "),a("a",{attrs:{href:"https://gist.github.com/Chaser324/ce0505fbed06b947d962",target:"_blank",rel:"noopener noreferrer"}},[e._v("this great Gist"),a("OutboundLink")],1),e._v(" by "),a("a",{attrs:{href:"https://gist.github.com/Chaser324",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chaser324"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("We like to keep a tight flow when working with GitHub to make sure we have a clear history and accountability of what changes were made and when. Working with Git, and especially the GitHub specific features like forking and creating pull requests, can be quite daunting for new users.")]),e._v(" "),a("p",[e._v("To help you out in your Git(Hub) adventures, we've put together the (fairly standard) flow of contributing to an open source repo.")]),e._v(" "),a("h3",{attrs:{id:"forking-the-repo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forking-the-repo","aria-hidden":"true"}},[e._v("#")]),e._v(" Forking the repo")]),e._v(" "),a("p",[e._v("Whether you're working on the API or the App, you will need to have your own copy of the codebase to work on. Head to the repo of the project you want to help out with and hit the Fork button. This will create a full copy of the whole project for you on your own account.")]),e._v(" "),a("p",[e._v("To work on this copy, you can install the project locally according to the normal installation instructions, substituting the name "),a("code",[e._v("directus")]),e._v(" with the name of your github account.")]),e._v(" "),a("h3",{attrs:{id:"keeping-your-fork-up-to-date"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keeping-your-fork-up-to-date","aria-hidden":"true"}},[e._v("#")]),e._v(" Keeping your fork up to date")]),e._v(" "),a("p",[e._v("If you're doing more work than just a tiny fix, it's a good idea to keep your fork up to date with the \"live\" or "),a("em",[e._v("upstream")]),e._v(" repo. This is the main Directus repo that contains the latest code. If you don't keep your fork up to date with the upstream one, you'll run into conflicts pretty fast. These conflicts will arise when you made a change in a file that changed in the upstream repo in the meantime.")]),e._v(" "),a("h4",{attrs:{id:"on-git-remotes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-git-remotes","aria-hidden":"true"}},[e._v("#")]),e._v(" On git remotes")]),e._v(" "),a("p",[e._v("When using git on the command line, you often pull and push to "),a("code",[e._v("origin")]),e._v(". You might have seen this term in certain commands, like")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" push origin master\n")])])]),a("p",[e._v("or")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" pull origin new-feature\n")])])]),a("p",[e._v("In this case, the word "),a("code",[e._v("origin")]),e._v(" is refered to as a "),a("em",[e._v("remote")]),e._v(". It's basically nothing more than a name for the full git url you cloned the project from:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" push origin master\n")])])]),a("p",[e._v("is equal to")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" push git@github.com:username/repo.git master\n")])])]),a("p",[e._v("A local git repo can have multiple remotes. While it's not very common to push your code to multiple repo's, it's very useful when working on open source projects. It allows you to add the upstream repo as another remote, making it possible to fetch the latest changes straight into your local project.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[e._v("# Add 'upstream' to remotes")]),e._v("\n"),a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" remote add upstream git@github.com:directus/app.git\n")])])]),a("p",[e._v("When you want to update your fork with the latest changes from the upstream project, you first have to fetch all the (new) branches and commits by running")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch upstream\n")])])]),a("p",[e._v("When all the changes are fetched, you can checkout the branch you want to update and merge in the changes.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git checkout master\ngit rebase upstream/master\n")])])]),a("p",[e._v("If you haven't made any commits on the branch you're updating, git will update your branch without complaints. If you "),a("em",[e._v("have")]),e._v(" created commits in the meantime, git will step by step apply all the commits from "),a("em",[e._v("upstream")]),e._v(" and try to add in the commit you made in the meantime. It is very plausible that conflicts arise at this stage. When you've changed something that also changed on the upstream, git requires you to resolve the conflict yourself before being able to move on.")]),e._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Conflicts")]),e._v(" "),a("p",[e._v("You should always favor changes on upstream over your local ones.")])]),e._v(" "),a("h3",{attrs:{id:"doing-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doing-work","aria-hidden":"true"}},[e._v("#")]),e._v(" Doing Work")]),e._v(" "),a("p",[e._v("Whenever you begin working on a bugfix or new feature, make sure to create a new branch. This makes sure that your changes are organized and separated from the master branch, so you can submit and manage your pull requests for separate fixes/features more easily.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[e._v("# Checkout the master branch - you want your new branch to come from master")]),e._v("\n"),a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout master\n\n"),a("span",{attrs:{class:"token comment"}},[e._v("# Create a new branch named newfeature (give your branch its own simple informative name)")]),e._v("\n"),a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" branch newfeature\n\n"),a("span",{attrs:{class:"token comment"}},[e._v("# Switch to your new branch")]),e._v("\n"),a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout newfeature\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Up-to-date")]),e._v(" "),a("p",[e._v("Make sure to update your master branch with the one from upstream, so you're certain you start with the latest version of the project!")])]),e._v(" "),a("h3",{attrs:{id:"submitting-a-pull-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submitting-a-pull-request","aria-hidden":"true"}},[e._v("#")]),e._v(" Submitting a Pull Request")]),e._v(" "),a("p",[e._v("Prior to opening your pull request, you might want to update your branch a final time, so it can immediately be merged into the master branch of upstream.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[e._v("# Fetch upstream master and merge with your repo's master branch")]),e._v("\n"),a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch upstream\n"),a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout master\n"),a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" merge upstream/master\n\n"),a("span",{attrs:{class:"token comment"}},[e._v("# If there were any new commits, rebase your master branch")]),e._v("\n"),a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout newfeature\n"),a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" rebase master\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Make sure to check if your branch is up to date with the "),a("code",[e._v("master")]),e._v(" branch of upstream. An outdated branch makes it near impossible for the maintainers of Directus to check and review the pull request and will most likely result in a delayed merge.")])]),e._v(" "),a("p",[e._v("Once you've commited and pushed all the changes on your branch to your fork on GitHub, head over to GitHub, select your branch and hit the pull request button.")]),e._v(" "),a("p",[e._v("You can still push new commits to a pull request that already has been opened. This way, you can fix certain comments reviewers might have left.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v('Please allow the maintainers of upstream to push commits to your fork by leaving the "Allow edits from maintainers" option turned on. This allows our Core Team to help out in your PR!')])]),e._v(" "),a("h2",{attrs:{id:"feature-requests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feature-requests","aria-hidden":"true"}},[e._v("#")]),e._v(" Feature Requests")]),e._v(" "),a("h3",{attrs:{id:"_80-20-rule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_80-20-rule","aria-hidden":"true"}},[e._v("#")]),e._v(" 80/20 Rule")]),e._v(" "),a("p",[e._v("The main thing to be aware of when submitting a new Directus feature request, is our rule on edge-cases. To keep the Directus core codebase as clean and simple as possible we will only consider adding features that at least 80% of our user-base will use. If we feel that less than 80% of our users will find the feature valuable then we will not implement it. Instead, those edge-case features should be added as Extensions.")]),e._v(" "),a("h3",{attrs:{id:"which-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#which-repository","aria-hidden":"true"}},[e._v("#")]),e._v(" Which Repository?")]),e._v(" "),a("p",[e._v("If your new feature is specific to the App (the part you see and use in the browser) then you'll want to submit "),a("a",{attrs:{href:"https://github.com/directus/app/issues/new?template=Feature_request.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". Otherwise, if it is an API feature you can submit "),a("a",{attrs:{href:"https://github.com/directus/api/issues/new?template=Feature_request.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". If you're not sure or the feature is more conceptual or global, then submit it to the App and we'll organize it for you!")]),e._v(" "),a("h3",{attrs:{id:"browsing-existing-requests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#browsing-existing-requests","aria-hidden":"true"}},[e._v("#")]),e._v(" Browsing Existing Requests")]),e._v(" "),a("p",[e._v("Before adding a new request, you should also first "),a("a",{attrs:{href:"https://github.com/directus/app/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc",target:"_blank",rel:"noopener noreferrer"}},[e._v("search"),a("OutboundLink")],1),e._v(" to see if it has already been submitted. All feature requests should include the "),a("code",[e._v("enhancement")]),e._v(" label, so you can filter by that. And remember to also check "),a("em",[e._v("closed")]),e._v(" issues since your feature might have already been submitted in the past and either "),a("a",{attrs:{href:"#Our-80/20-Rule"}},[e._v("rejected")]),e._v(" or already implemented.")]),e._v(" "),a("p",[e._v("Also, if you want to see the most highly requested features you can sort by "),a("code",[e._v(":+1:")]),e._v(" (the thumbs-up emoji).")]),e._v(" "),a("h3",{attrs:{id:"submitting-a-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submitting-a-request","aria-hidden":"true"}},[e._v("#")]),e._v(" Submitting a Request")]),e._v(" "),a("p",[e._v("If your idea passes the 80/20 test and has not already been submitted, then we'd love to hear it! Submit a new issue using the Feature Request template and be sure to include the "),a("code",[e._v("enhancement")]),e._v(" label. It's important to completely fill our the template with as much useful information as possible so that we can properly review your request. If you have screenshots, designs, code samples, or any other helpful assets be sure to include those too!")]),e._v(" "),a("h3",{attrs:{id:"voting-on-requests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#voting-on-requests","aria-hidden":"true"}},[e._v("#")]),e._v(" Voting on Requests")]),e._v(" "),a("p",[e._v("You can also vote on existing feature requests. As mentioned above, the "),a("code",[e._v(":+1:")]),e._v(" and "),a("code",[e._v(":-1:")]),e._v(" are used for sorting, so adding one of these reactions to the GitHub issue will cast a vote that helps us better identify the most desired (or undesired) features. And remember to add a comment if you have additional thoughts to help clarify or improve the request.")]),e._v(" "),a("h3",{attrs:{id:"fulfilling-a-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fulfilling-a-request","aria-hidden":"true"}},[e._v("#")]),e._v(" Fulfilling a Request")]),e._v(" "),a("p",[e._v("Our core team is always working hard to implement the most highly-requested community features, but we're a small team. If you need the feature faster than we can provide it, or simply want to help improve the Directus platform, we'd love to receive a pull-request from you!")])])},[],!1,null,null,null);o.options.__file="contributing.md";t.default=o.exports}}]);