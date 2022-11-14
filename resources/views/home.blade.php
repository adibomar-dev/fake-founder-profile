<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <!-- Basic meta(s) -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Variable(s) to widely use. -->
        <script>
            window.baseUrl = "{{ asset('/') }}";
        </script>

        <!-- Favicon -->
        <link rel="shortcut icon" href="{{ asset('image/logo.png') }}">

        <!-- Webpack CSS -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}" type="text/css">

        <!-- Title -->
        <title>
            Founder Profile
        </title>
    </head>
    <body>
        <!-- Preloader -->
        <div class="position-absolute preloader">
            <div class="preloader-content">
                <img src="{{ asset('image/Adib-full-white.png') }}" class="w-100 h-100">
            </div>
        </div>

        <!-- Card body -->
        <div class="card adib-card">
            <div class="card-body p-0">
                <!-- Top profile section -->
                <div class="first-section">
                    <!-- Image section -->
                    <div class="top-profile-image-section">
                        <div class="top-profile-image">
                            <img src="{{ asset('image/Adib-favicon-white.png') }}" class="w-100 h-100">
                        </div>
                    </div>

                    <!-- Name -->
                    <div class="name text-dark text-center pt-2">
                        Adib Omar
                    </div>

                    <!-- Job and username -->
                    <div class="job-username text-muted text-center small-font">
                        Founder of @<span>adibomar</span>
                    </div>

                    <!-- Location -->
                    <div class="location text-muted text-center small-font">
                        <span class="city">Kelana Jaya</span>, <span class="state">Selangor</span>
                    </div>

                    <!-- Social media section -->
                    <div class="social-media-box mt-3">
                        <!-- Twitter -->
                        <a href="#" target="_blank" class="btn btn-outline-muted twitter">
                            <i class="fa fa-twitter"></i>
                        </a>

                        <!-- Facebook -->
                        <a href="#" target="_blank" class="btn btn-outline-muted facebook">
                            <i class="fa fa-facebook"></i>
                        </a>

                        <!-- Website -->
                        <a href="#" target="_blank" class="btn btn-outline-muted website">
                            <i class="fa fa-globe"></i>
                        </a>
                    </div>
                </div>

                <!-- Follower section -->
                <div class="second-section">
                    <!-- Following and follower section -->
                    <div class="follower-following">
                        <div class="following">
                            <div class="number text-dark">
                                219
                            </div>
                            <div class="label text-muted">
                                FOLLOWING
                            </div>
                        </div>
                        <div class="follower">
                            <div class="number text-dark">
                                291K
                            </div>
                            <div class="label text-muted">
                                FOLLOWERS
                            </div>
                        </div>
                    </div>

                    <!-- You may know -->
                    <div class="you-may-know">
                        <!-- List of user images -->
                        <div class="list-of-user"></div>

                        <!-- Number of followers know you -->
                        <div class="text-muted text-center followers-text">
                            <span class="number">20</span> FOLLOWERS YOU KNOW
                        </div>

                        <!-- Follow button -->
                        <div class="mt-3 mx-3">
                            <div class="btn btn-primary rounded-pill w-100">
                                Follow
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Webpack JS -->
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
