using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Navigation;
using Microsoft.Phone.Controls;
using Microsoft.Phone.Shell;
using HelpKit.Resources;
using Microsoft.Phone.Maps;
using System.Diagnostics;
using Microsoft.Phone.Tasks;
using System.Device.Location;
using System.IO.IsolatedStorage;
using Windows.Devices.Geolocation;
using System.Threading.Tasks;

namespace HelpKit
{
    public partial class MainPage : PhoneApplicationPage
    {
        // Constructor
        public MainPage()
        {
            InitializeComponent();
            

            // Sample code to localize the ApplicationBar
            //BuildLocalizedApplicationBar();
        }

        

        private void Hospital_Tap(object sender, System.Windows.Input.GestureEventArgs e)
        {
            MapsTask mapsTask = new MapsTask();

            //Omit the Center property to use the user's current location.
            //mapsTask.Center = new GeoCoordinate(47.6204, -122.3493);

            mapsTask.SearchTerm = "hopital";
            mapsTask.ZoomLevel = 2;
            Debug.WriteLine(sender);
            mapsTask.Show();
        }

        private void Bbank_tap(object sender, System.Windows.Input.GestureEventArgs e)
        {
            Debug.WriteLine("bbank tap recieved");
            MapsTask mapsTask = new MapsTask();

            //Omit the Center property to use the user's current location.
            //mapsTask.Center = new GeoCoordinate(47.6204, -122.3493);

            mapsTask.SearchTerm = "blood bank";
            mapsTask.ZoomLevel = 2;
            Debug.WriteLine(sender);
            mapsTask.Show();
        }

       
        private void Emergency_tap(object sender, System.Windows.Input.GestureEventArgs e)
        {
            string Cnumber,Cname;
            Cnumber = loadInfo("contact_no");
            Cname = loadInfo("contact_name");
            //saveInfo("8093984898", "Econtact");

            if (Cnumber != null)
            {
                PhoneCallTask phonecallTask = new PhoneCallTask();
                phonecallTask.PhoneNumber = Cnumber;
                phonecallTask.DisplayName = Cname;

                phonecallTask.Show();

            }

            else
            {
                MessageBoxResult result = MessageBox.Show("No emergency contact registered yet", "information", MessageBoxButton.OKCancel);

                if (result == MessageBoxResult.OK)
                {
                    //MessageBox.Show("Set Emergency contact");
                    NavigationService.Navigate(new Uri("/SaveContact.xaml", UriKind.Relative));
                }
                
            }

            
        }

         string loadInfo(string name)
        {
            if (IsolatedStorageSettings.ApplicationSettings.Contains(name))
            {
                return (string)IsolatedStorageSettings.ApplicationSettings[name];
            }
            else
            {
                return null;
            }
                
        }

        void saveInfo(string data, string name)
        {
            IsolatedStorageSettings.ApplicationSettings[name] = data;
            IsolatedStorageSettings.ApplicationSettings.Save();
        }

              
        private async void ESms(object sender, System.Windows.Input.GestureEventArgs e)
        {
            string Enumber,Lat,Long;
            Lat = "Not Found";
            Long = "Not Found";
            Enumber = loadInfo("contact_no");
            
            if((bool)IsolatedStorageSettings.ApplicationSettings["LocationConsent"] != true)
            {
                // The user has opted out of Location.
                return;
            }
            Geolocator geolocator = new Geolocator();
            geolocator.DesiredAccuracyInMeters = 50;

            try
            {
            Geoposition geoposition = await geolocator.GetGeopositionAsync(
                    maximumAge: TimeSpan.FromMinutes(5),
                    timeout: TimeSpan.FromSeconds(10)
                    );

                Lat = geoposition.Coordinate.Latitude.ToString("0.00");
                Long = geoposition.Coordinate.Longitude.ToString("0.00");
            }
            catch (Exception ex)
            {
                if ((uint)ex.HResult == 0x80004004)
                {
                    // the application does not have the right capability or the location master switch is off
                    MessageBox.Show("location  is disabled in phone settings.");
                }
                //else
                {
                    // something else happened acquring the location
                }
            }


            if(Enumber == null)
            {
                MessageBoxResult result = MessageBox.Show("No emergency contact registered yet", "information", MessageBoxButton.OKCancel);

                if (result == MessageBoxResult.OK)
                {
                    //MessageBox.Show("Set Emergency contact");
                    NavigationService.Navigate(new Uri("/SaveContact.xaml", UriKind.Relative));
                }
            }

            else
            {
                SmsComposeTask EmergencySMS = new SmsComposeTask();
                EmergencySMS.To = Enumber;
                EmergencySMS.Body += "I need urgent help ,my current location is Latitude :"+Lat+ " Longitude:"+Long;

                EmergencySMS.Show();

            }
        }

        protected override void OnNavigatedTo(System.Windows.Navigation.NavigationEventArgs e)
        {
            if (IsolatedStorageSettings.ApplicationSettings.Contains("LocationConsent"))
            {
                // User has opted in or out of Location
                return;
            }
            else
            {
                MessageBoxResult result =
                    MessageBox.Show("This app accesses your phone's location. Is that ok?",
                    "Location",
                    MessageBoxButton.OKCancel);

                if (result == MessageBoxResult.OK)
                {
                    IsolatedStorageSettings.ApplicationSettings["LocationConsent"] = true;
                }
                else
                {
                    IsolatedStorageSettings.ApplicationSettings["LocationConsent"] = false;
                }

                IsolatedStorageSettings.ApplicationSettings.Save();
            }
        }

      
        private void Alarm(object sender, System.Windows.Input.GestureEventArgs e)
        {
            NavigationService.Navigate(new Uri("/Alarm.xaml", UriKind.Relative));
        }



        // Sample code for building a localized ApplicationBar
        //private void BuildLocalizedApplicationBar()
        //{
        //    // Set the page's ApplicationBar to a new instance of ApplicationBar.
        //    ApplicationBar = new ApplicationBar();

        //    // Create a new button and set the text value to the localized string from AppResources.
        //    ApplicationBarIconButton appBarButton = new ApplicationBarIconButton(new Uri("/Assets/AppBar/appbar.add.rest.png", UriKind.Relative));
        //    appBarButton.Text = AppResources.AppBarButtonText;
        //    ApplicationBar.Buttons.Add(appBarButton);

        //    // Create a new menu item with the localized string from AppResources.
        //    ApplicationBarMenuItem appBarMenuItem = new ApplicationBarMenuItem(AppResources.AppBarMenuItemText);
        //    ApplicationBar.MenuItems.Add(appBarMenuItem);
        //}
    }
}