## Admin Controllers
  1 - class GalleriesController
```c#
    private void sectionList()
            {
                #region sectionList
                List<SelectListItem> sections = new List<SelectListItem>()
                {
                    new SelectListItem
                    { Text = _localizer["section_Papers"] , Value = (GetCurrentDataLang() == "ar") ?  _localizer["section_Papers"] : GallerySections.Papers.ToString()  },
                    new SelectListItem
                    { Text = _localizer["section_oils"] , Value = (GetCurrentDataLang() == "ar") ?  _localizer["section_oils"] : GallerySections.oils.ToString() },
                    new SelectListItem
                    { Text = _localizer["section_Cartons"] , Value = (GetCurrentDataLang() == "ar") ?  _localizer["section_Cartons"] : GallerySections.Cartons.ToString() },
                };
                ViewBag.sectionList = sections;
                #endregion
            }
```