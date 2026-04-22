import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { PersonalDetails } from './pages/personal-details/personal-details';
import { Settings } from './pages/settings/settings';

export const routes: Routes = [
    {path:"", component:Home},
    {path:"profile", component:Profile, 
        children:[
        // select personal-details by default when on profile page
        /* 
            whenever user go to the profile page, inside profile page IF nothing is
            given(/profile), then redirect it to (/profile/personal-details).
        */
        {path:"", redirectTo:"personal-details", pathMatch:"full"},
        {path:"personal-details", component:PersonalDetails},
        {path:"settings", component:Settings},
    ]},

];
