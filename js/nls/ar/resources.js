﻿define(
     ({
        map: {
            error: "يتعذر إنشاء الخريطة"
        },
        onlineStatus: {
            offline: "أنت الآن غير مُتصل بالإنترنت. سيتم حفظ عمليات الإرسال محليًا حتى يتم إنشاء الاتصال بالخادم.",
            reconnecting: "إعادة الاتصال&hellip;",
            pending: "سيتم إرسال التحريرات المعلقة ${total} عند إعادة تأسيس اتصال الشبكة."
        },
        configure: {
            mapdlg: {
                items: {
                    organizationLabel: "المؤسسة",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "المحتوى",
                    favoritesLabel: "المفضلات"
                },
                title: "تحديد خريطة الويب",
                searchTitle: "البحث",
                ok: "موافق",
                cancel: "إلغاء",
                placeholder: "أدخل مصطلح البحث"
            },
            groupdlg: {
                items: {
                    organizationLabel: "المؤسسة",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "المحتوى",
                    favoritesLabel: "المفضلات"
                },
                title: "تحديد المجموعة",
                searchTitle: "البحث",
                ok: "موافق",
                cancel: "إلغاء",
                placeholder: "أدخل مصطلح البحث"
            }
        },
        user: {
            mgrs: "MGRS",
            usng: "USNG",
            utm: "UTM",
            utm_northing: "لا شيء",
            utm_easting: "اتجاه نحو الشرق",
            utm_zone_number: "رقم المنطقة",
            geoFormGeneralTabText: "1. أدخل المعلومات",
            locationInformationText: "2. حدد الموقع",
            submitInformationText: "3. أكمل النموذج",
            submitInstructions: "أضف هذه المعلومات إلى الخريطة.",
            myLocationText: "الموقع الحالي",
            locationDescription: "حدد موقع هذا الإدخال عن طريق النقر/الضغط فوق الخريطة أو عن طريق استخدام أحد الخيارات التالية.",
            addressText: "بحث",
            geographic: "خطوط الطول/خطوط العرض",
            locationTabText: "موقع",
            locationPopupTitle: "الموقع",
            submitButtonText: "تقديم إدخال",
            submitButtonTextLoading: "إرسال&hellip;",
            formValidationMessageAlertText: "يتطلب الحقول التالية:",
            selectLocation: "الرجاء تحديد ${openLink}موقع${closeLink}للإرسال.",
            emptylatitudeAlertMessage: "الرجاء إدخال إحداثيات ${openLink}خطوط العرض${closeLink}.",
            emptylongitudeAlertMessage: "الرجاء إدخال إحداثيات ${openLink}خطوط الطول${closeLink}.",
            shareUserTitleMessage: "أشكرك على مساهمتك!",
            entrySubmitted: "لقد تم تقديم الإدخال الخاص بك على الخريطة.",
            shareThisForm: "مشاركة هذا النموذج",
            shareUserTextMessage: "أخبر الأخرين بالمشاركة باستخدام الخيارات التالية.",
            addAttachmentFailedMessage: "تعذر إضافة مرفقات إلى الطبقة",
            addFeatureFailedMessage: "تعذر إضافة معلم إلى الطبقة",
            noLayerConfiguredMessage: "حدث خطأ أثناء تحميل أو إيجاد طبقة المعالم التي يُمكن تحريرها. لعرض النموذج وبدء تجميع عمليات الإرسال وإضافة طبقة المعالم التي يُمكن تحريرها إلى خريطة الويب.",
            placeholderLatitude: "خط العرض (Y)",
            placeholderLongitude: "خط الطول (X)",
            latitude: "خط العرض",
            longitude: "خط الطول",
            findMyLocation: "تحديد موقعي",
            finding: "تحديد موقع&hellip;",
            backToTop: "عودة لأعلى",
            addressSearchText: "سيظهر الإرسال هنا. يمكنك سحب الدبوس لتصحيح الموقع.",
            shareModalFormText: "رابط النموذج",
            close: "غلق",
            locationNotFound: "يتعذر العثور على الموقع.",
            setLocation: "تعيين الموقع",
            find: "العثور على عنوان أو مكان ما",
            attachment: "مرفق",
            toggleDropdown: "تبديل القائمة المنسدلة",
            invalidLatLong: "الرجاء إدخال إحداثيات ${latLink}خطوط العرض${closeLink} و ${lngLink}خطوط الطول${closeLink} الصحيحة.",
            invalidUTM: "الرجاء إدخال إحداثيات ${openLink}UTM${closeLink} الصحيحة.",
            invalidUSNG: "الرجاء إدخال إحداثيات ${openLink}USNG${closeLink} الصحيحة.",
            invalidMGRS: "الرجاء إدخال إحداثيات ${openLink}MGRS${closeLink} الصحيحة.",
            geoformTitleText: "GeoForm",
            domainDefaultText: "حدد&hellip;",
            applyEditsFailedMessage: "عذرًا، يتعذر إرسال الإدخال الخاص بك. الرجاء المحاولة مرة أخرى.",
            requiredFields: "يوجد بعض الأخطاء، الرجاء تصحيحهم أدناه.",
            requiredField: "(مطلوب)",
            error: "خطأ",
            textRangeHintMessage: "${openStrong}لمحة:${closeStrong} قيمة الحد الأدنى ${minValue} وقيمة الحد الأقصى ${maxValue}",
            dateRangeHintMessage: "${openStrong}لمحة:${closeStrong} الحد الأدنى للتاريخ ${minValue} والحد الأقصى للتاريخ ${maxValue}"
        },
        builder: {
            invalidUser: "عذرًا، ليس لديك الإذن لعرض هذا العنصر",
            invalidWebmapSelectionAlert: "لا تحتوي خريطة الويب المحددة على طبقة صحيحة للاستخدام. الرجاء إضافة FeatureLayer قابلة للتحرير في خريطة الويب للاستمرار.",
            invalidWebmapSelectionAlert2: "لمزيد من المعلومات، الرجاء الرجوع إلى ${openLink}ما هي خدمة المعلم؟${closeLink}",
            selectFieldsText: "حدد من الحقول",
            selectThemeText: "تحديد سمة النموذج",
            webmapText: "خريطة الويب",
            layerText: "طبقة",
            detailsText: "تفاصيل",
            fieldsText: "حقول",
            styleText: "النمط",
            optionText: "خيارات",
            previewText: "معاينة",
            publishText: "نشر",
            optionsApplicationText: "خيارات",
            titleText: "منشيء",
            descriptionText: "يعد GeoForm قالب قابل للتكوين لتحرير البيانات التي تستند إلى نموذج من ${link1}خدمة المعلم${closeLink}. يسمح هذا التطبيق للمستخدمين بإدخال البيانات من خلال نموذج بدلاً من نافذة الخريطة المنبثقة في حين زيادة قوة ${link2}خريطة الويب${closeLink} وخدمات المعلم القابلة للتحرير. استخدم الخطوات التالية لتخصيص ونشر GeoForm.",
            btnPreviousText: "السابق",
            btnNextText: "التالي",
            webmapTabTitleText: "حدد خريطة ويب",
            viewWebmap: "عرض خريطة الويب",
            btnSelectWebmapText: "اختر خريطة ويب",
            btnSelectWebmapTextLoading: "تحميل&hellip",
            layerTabTitleText: "تحديد الطبقة التي يمكن تحريرها",
            selectLayerLabelText: "طبقة",
            selectLayerDefaultOptionText: "تحديد الطبقة",
            detailsTabTitleText: "تفاصيل النموذج",
            detailTitleLabelText: "العنوان",
            detailLogoLabelText: "صورة الشعار",
            descriptionLabelText: "نص التعليمات (اختياري)",
            fieldTabFieldHeaderText: "حقل",
            fieldTabLabelHeaderText: "لافتة التسمية",
            fieldTabDisplayTypeHeaderText: "عرض في شكل",
            selectMenuOption: "حدد قائمة",
            selectRadioOption: "زر الراديو",
            selectTextOption: "النص",
            selectCheckboxOption: "خانة الاختيار",
            selectMailOption: "البريد الإلكتروني",
            selectUrlOption: "محدد موقع معلومات (URL)",
            selectTextAreaOption: "جزء النص",
            previewApplicationText: "معاينة التطبيق",
            saveApplicationText: "حفظ التطبيق",
            saveText: "حفظ",
            toggleNavigationText: "تبديل التنقل",
            formPlaceholderText: "النموذج الخاص بي",
            shareBuilderInProgressTitleMessage: "نشر GeoForm",
            shareBuilderProgressBarMessage: "الرجاء الانتظار&hellip;",
            shareBuilderTitleMessage: "عملية ناجحة! تم حفظ العنصر",
            shareBuilderTextMessage: "يمكن بدء تجميع المعلومات عن طريق المشاركة مع الأخرين",
            shareModalFormText: "رابط النموذج",
            shareBuilderSuccess: "تم تحديث ونشر GeoForm!",
            geoformTitleText: "Geo Form",
            layerTabText: "هذه هي الطبقة التي سيُبنَى GeoForm منها، ويجب أن تكون الطبقة خدمة معالم مُمكنة للتحرير ولديها أذونات المشاركة المناسبة للجمهور.",
            detailsTabText: "استخدام مربعات تفاصيل النموذج أدناه لتخصيص العنوان وإضافة شعار مُخصّص وتقديم وصف مختصر لجمهور GeoForm. في الوصف، يمكنك إضافة روابط إلى الموارد الأخرى ومعلومات جهة الاتصال وحتى إشارة جمهورك إلى تطبيق رسم الخرائط على الويب الذي يشتمل على جميع البيانات المجمعة مع GeoForm.",
            fieldsTabText: "هنا يمكنك تحديد الحقول التي ستكون مرئية لجمهور GeoForm وتحرير التسميات التي سيراها الجمهور، وكذلك إضافة وصف مختصر للمساعدة عبر إدخال البيانات.",
            styleTabText: "إنشاء نمط لـ GeoForm باستخدام المواضيع أدناه بناءً على الإسناد.",
            publishTabText: "إذا قمت بإنهاء تخصيص GeoForm، احفظ التطبيق وابدأ المشاركة مع الجمهور. يمكنك دائمًا الرجوع إلى هذا المنشئ واستمرار التخصيص استنادً إلى الملاحظات.",
            smallHeader: "استخدم رأس صفحة صغير",
            pushpinText: "دبوس الضبط",
            doneButtonText: "عرض عنصر التطبيق",
            fieldTabPlaceHolderHeaderText: "تلميح (اختياري)",
            attachmentLabelText: "تسمية المرفق",
            attachmentLabelHint: "أخبر المستخدمين نوع الملف المراد إرفاقه.",
            attachmentDescription: "وصف المرفقات",
            attachmentHint: "إذا لزم الأمر، يمكنك توفير تعليمات المرفقات الإضافية هنا.",
            jumbotronDescription: "يجعل نظام تمهيد تشغيل الكمبيوتر من السهل تحديد الغرض من التطبيق. ويمكن تعطيل هذا في أي وقت.",
            shareGeoformText: "مشاركة Geoform",
            shareDescription: "لوحة المشاركة تجعل الجمهور من السهل مشاركة GeoForm مع المساهمين الأخرين عند قيامهم بالإرسال - يمكن تعطيل هذا في أي وقت.",
            defaultMapExtent: "نطاق الخريطة الافتراضي",
            defaultMapExtentDescription: "ستقوم الخريطة بإعادة تعيين النطاق الافتراضي في خريطة الويب بعد الإرسال - يمكن تعطيل هذا في أي وقت.",
            pushpinOptionsDescription: "اختر من مجموعة الألوان المتعددة الخاصة بدبوس تثبيت الخريطة، وينبغي أن تختلف عن ترميز الخريطة لمساعدة المستخدم في وضع إرسالهم على الخريطة.",
            selectLocationText: "حدد الموقع حسب",
            myLocationText: "الموقع الخاص بي",
            searchText: "بحث",
            coordinatesText: "إحداثيات خطوط الطول وخطوط العرض",
            usng: "إحداثيات USNG",
            mgrs: "إحداثيات MGRS",
            utm: "إحداثيات UTM",
            selectLocationSDescription: "السماح للمستخدمين بتحديد موقع باستخدام تلك الطرق."
        }
    })
);