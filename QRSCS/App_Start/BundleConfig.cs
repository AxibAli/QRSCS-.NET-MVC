using System.Web;
using System.Web.Optimization;

namespace QRSCS
{
    public class BundleConfig
    {

        public static void RegisterBundles(BundleCollection bundles)
        {

            //javascript Files
            bundles.Add(new ScriptBundle("~/bundles/MyJs").Include(

           "~/Content/adminassets/assets/vendors/JotForm/jquery.min.js",
           "~/Content/adminassets/assets/js/jquery.min.js",
           "~/Content/adminassets/assets/vendors/owl-carousel/owl.carousel.js",
           "~/Content/adminassets/assets/js/admin.js",
           "~/Content/adminassets/assets/vendors/counter/counterup.min.js",
           "~/Content/adminassets/assets/vendors/counter/waypoints-min.js",
           "~/Content/adminassets/assets/js/functions.js",
           "~/Content/adminassets/assets/vendors/bootstrap/js/bootstrap.min.js",
           "~/Content/adminassets/assets/vendors/chart/chart.min.js"
             ));

            //Style Files
            bundles.Add(new StyleBundle("~/bundles/MyCss").Include(

            "~/Content/adminassets/assets/css/assets.css",
            "~/Content/adminassets/assets/css/typography.css",
            "~/Content/adminassets/assets/css/shortcodes/shortcodes.css",
            "~/Content/assetstable/css/sb-admin-2.min.css",
            "~/Content/assetstable/vendor/datatables/dataTables.bootstrap4.min.css",
            "~/Content/assetstable/vendor/fontawesome-free/css/all.min.css",
            "~/Content/adminassets/assets/css/style.css",
            "~/Content/adminassets/scrollbar.css",
            "~/Content/adminassets/assets/css/dashboard.css",
            "~/Content/adminassets/assets/css/color/color-1.css",
            // after place this css idd perfomance background changed from white to grey
            "~/Content/adminassets/css/style.css"

                        ));




        }
    }
}
