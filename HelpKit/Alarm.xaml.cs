using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Navigation;
using Microsoft.Phone.Controls;
using Microsoft.Phone.Shell;

namespace HelpKit
{
    public partial class Alarm : PhoneApplicationPage
    {
        public Alarm()
        {
            InitializeComponent();
            
            
            alarm_sound.Play();
             
        }

        private void Media_stop(object sender, System.Windows.Input.GestureEventArgs e)
        {
            alarm_sound.Stop();
            if (this.NavigationService.CanGoBack)
            {
                this.NavigationService.GoBack();
            }
        }
    }
}