using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Navigation;
using Microsoft.Phone.Controls;
using Microsoft.Phone.Shell;
using Microsoft.Phone.Tasks;
using System.Diagnostics;
using System.IO.IsolatedStorage;


namespace HelpKit
{
    public partial class SaveContact : PhoneApplicationPage
    {
        public SaveContact()
        {
            InitializeComponent();
        }

        

        private void Contactfn(object sender, System.Windows.Input.GestureEventArgs e)
        {
            PhoneNumberChooserTask chooser = new PhoneNumberChooserTask();
            chooser.Show();
            chooser.Completed += new EventHandler<PhoneNumberResult>(phonechoose_completed);
        }

        void phonechoose_completed(object sender,PhoneNumberResult e)
        {
            if (e.TaskResult == TaskResult.OK)
            {
                MessageBox.Show("Your Emergency contact is chosen as " + e.DisplayName + " No.:" + e.PhoneNumber);
                saveInfo(e.PhoneNumber, "contact_no");
                saveInfo(e.DisplayName, "contact_name");
                
            }

            if (this.NavigationService.CanGoBack)
            {
                this.NavigationService.GoBack();
            }
        }

        void saveInfo(string data, string name)
        {
            IsolatedStorageSettings.ApplicationSettings[name] = data;
            IsolatedStorageSettings.ApplicationSettings.Save();
        }

        private void Manualfn(object sender, System.Windows.Input.GestureEventArgs e)
        {
            
        }
    }
}