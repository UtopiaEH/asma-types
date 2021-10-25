export default {
    "scalars": [
        0,
        1,
        4,
        10,
        24,
        35,
        45,
        53,
        62,
        64,
        69,
        70,
        80,
        82,
        87,
        96,
        98,
        99,
        105,
        106,
        116,
        118,
        127,
        138,
        145,
        155,
        157,
        171,
        181,
        183,
        186,
        201,
        206,
        215,
        217,
        229,
        239,
        250,
        251,
        261,
        263,
        270,
        280,
        282,
        284,
        289,
        298,
        300,
        305,
        306,
        316,
        318,
        323,
        324,
        334,
        336,
        341,
        342,
        352,
        354,
        361,
        371,
        373,
        378,
        379,
        389,
        391,
        398,
        409,
        411,
        412,
        420,
        431,
        433,
        447,
        458,
        468,
        476,
        487,
        489,
        490
    ],
    "types": {
        "Boolean": {},
        "Float": {},
        "InsertUserData": {
            "brukerBrukerNavn": [
                10
            ],
            "brukerRegion": [
                4
            ],
            "customer_id": [
                490
            ],
            "email": [
                10
            ],
            "name": [
                10
            ],
            "password": [
                10
            ],
            "phone": [
                10
            ],
            "role": [
                10
            ],
            "token": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "InsertUserOrWarnIfExistsOutput": {
            "affected_rows": [
                4
            ],
            "id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "Int": {},
        "Int_comparison_exp": {
            "_eq": [
                4
            ],
            "_gt": [
                4
            ],
            "_gte": [
                4
            ],
            "_in": [
                4
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                4
            ],
            "_lte": [
                4
            ],
            "_neq": [
                4
            ],
            "_nin": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "ReturnAffectedItemId": {
            "id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "ReturnAffectedRows": {
            "affected_rows": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "SigninOutput": {
            "message": [
                10
            ],
            "token": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "SinginOutputWithRefreshToken": {
            "message": [
                10
            ],
            "refresh_token": [
                10
            ],
            "token": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "String": {},
        "String_comparison_exp": {
            "_eq": [
                10
            ],
            "_gt": [
                10
            ],
            "_gte": [
                10
            ],
            "_ilike": [
                10
            ],
            "_in": [
                10
            ],
            "_iregex": [
                10
            ],
            "_is_null": [
                0
            ],
            "_like": [
                10
            ],
            "_lt": [
                10
            ],
            "_lte": [
                10
            ],
            "_neq": [
                10
            ],
            "_nilike": [
                10
            ],
            "_nin": [
                10
            ],
            "_niregex": [
                10
            ],
            "_nlike": [
                10
            ],
            "_nregex": [
                10
            ],
            "_nsimilar": [
                10
            ],
            "_regex": [
                10
            ],
            "_similar": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "UpdateUserOutput": {
            "affected_rows": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "admins": {
            "admins_auth_logs": [
                16,
                {
                    "distinct_on": [
                        35,
                        "[admins_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        33,
                        "[admins_auth_logs_order_by!]"
                    ],
                    "where": [
                        23
                    ]
                }
            ],
            "admins_auth_logs_aggregate": [
                17,
                {
                    "distinct_on": [
                        35,
                        "[admins_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        33,
                        "[admins_auth_logs_order_by!]"
                    ],
                    "where": [
                        23
                    ]
                }
            ],
            "created_at": [
                412
            ],
            "email": [
                99
            ],
            "id": [
                490
            ],
            "name": [
                99
            ],
            "password": [
                99
            ],
            "phone": [
                10
            ],
            "updated_at": [
                412
            ],
            "__typename": [
                10
            ]
        },
        "admins_aggregate": {
            "aggregate": [
                15
            ],
            "nodes": [
                13
            ],
            "__typename": [
                10
            ]
        },
        "admins_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        62,
                        "[admins_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                55
            ],
            "min": [
                56
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs": {
            "admin": [
                13
            ],
            "admin_id": [
                490
            ],
            "authenticated_at": [
                412
            ],
            "id": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_aggregate": {
            "aggregate": [
                18
            ],
            "nodes": [
                16
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_aggregate_fields": {
            "avg": [
                21
            ],
            "count": [
                4,
                {
                    "columns": [
                        35,
                        "[admins_auth_logs_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                27
            ],
            "min": [
                29
            ],
            "stddev": [
                37
            ],
            "stddev_pop": [
                39
            ],
            "stddev_samp": [
                41
            ],
            "sum": [
                43
            ],
            "var_pop": [
                46
            ],
            "var_samp": [
                48
            ],
            "variance": [
                50
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_aggregate_order_by": {
            "avg": [
                22
            ],
            "count": [
                284
            ],
            "max": [
                28
            ],
            "min": [
                30
            ],
            "stddev": [
                38
            ],
            "stddev_pop": [
                40
            ],
            "stddev_samp": [
                42
            ],
            "sum": [
                44
            ],
            "var_pop": [
                47
            ],
            "var_samp": [
                49
            ],
            "variance": [
                51
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_arr_rel_insert_input": {
            "data": [
                26
            ],
            "on_conflict": [
                32
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_avg_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_avg_order_by": {
            "id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_bool_exp": {
            "_and": [
                23
            ],
            "_not": [
                23
            ],
            "_or": [
                23
            ],
            "admin": [
                52
            ],
            "admin_id": [
                491
            ],
            "authenticated_at": [
                413
            ],
            "id": [
                5
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_constraint": {},
        "admins_auth_logs_inc_input": {
            "id": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_insert_input": {
            "admin": [
                58
            ],
            "admin_id": [
                490
            ],
            "authenticated_at": [
                412
            ],
            "id": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_max_fields": {
            "admin_id": [
                490
            ],
            "authenticated_at": [
                412
            ],
            "id": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_max_order_by": {
            "admin_id": [
                284
            ],
            "authenticated_at": [
                284
            ],
            "id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_min_fields": {
            "admin_id": [
                490
            ],
            "authenticated_at": [
                412
            ],
            "id": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_min_order_by": {
            "admin_id": [
                284
            ],
            "authenticated_at": [
                284
            ],
            "id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                16
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_on_conflict": {
            "constraint": [
                24
            ],
            "update_columns": [
                45
            ],
            "where": [
                23
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_order_by": {
            "admin": [
                60
            ],
            "admin_id": [
                284
            ],
            "authenticated_at": [
                284
            ],
            "id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_pk_columns_input": {
            "id": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_select_column": {},
        "admins_auth_logs_set_input": {
            "admin_id": [
                490
            ],
            "authenticated_at": [
                412
            ],
            "id": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_stddev_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_stddev_order_by": {
            "id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_stddev_pop_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_stddev_pop_order_by": {
            "id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_stddev_samp_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_stddev_samp_order_by": {
            "id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_sum_fields": {
            "id": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_sum_order_by": {
            "id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_update_column": {},
        "admins_auth_logs_var_pop_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_var_pop_order_by": {
            "id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_var_samp_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_var_samp_order_by": {
            "id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_variance_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_variance_order_by": {
            "id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "admins_bool_exp": {
            "_and": [
                52
            ],
            "_not": [
                52
            ],
            "_or": [
                52
            ],
            "admins_auth_logs": [
                23
            ],
            "created_at": [
                413
            ],
            "email": [
                100
            ],
            "id": [
                491
            ],
            "name": [
                100
            ],
            "password": [
                100
            ],
            "phone": [
                11
            ],
            "updated_at": [
                413
            ],
            "__typename": [
                10
            ]
        },
        "admins_constraint": {},
        "admins_insert_input": {
            "admins_auth_logs": [
                20
            ],
            "created_at": [
                412
            ],
            "email": [
                99
            ],
            "id": [
                490
            ],
            "name": [
                99
            ],
            "password": [
                99
            ],
            "phone": [
                10
            ],
            "updated_at": [
                412
            ],
            "__typename": [
                10
            ]
        },
        "admins_max_fields": {
            "created_at": [
                412
            ],
            "email": [
                99
            ],
            "id": [
                490
            ],
            "name": [
                99
            ],
            "password": [
                99
            ],
            "phone": [
                10
            ],
            "updated_at": [
                412
            ],
            "__typename": [
                10
            ]
        },
        "admins_min_fields": {
            "created_at": [
                412
            ],
            "email": [
                99
            ],
            "id": [
                490
            ],
            "name": [
                99
            ],
            "password": [
                99
            ],
            "phone": [
                10
            ],
            "updated_at": [
                412
            ],
            "__typename": [
                10
            ]
        },
        "admins_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                13
            ],
            "__typename": [
                10
            ]
        },
        "admins_obj_rel_insert_input": {
            "data": [
                54
            ],
            "on_conflict": [
                59
            ],
            "__typename": [
                10
            ]
        },
        "admins_on_conflict": {
            "constraint": [
                53
            ],
            "update_columns": [
                64
            ],
            "where": [
                52
            ],
            "__typename": [
                10
            ]
        },
        "admins_order_by": {
            "admins_auth_logs_aggregate": [
                19
            ],
            "created_at": [
                284
            ],
            "email": [
                284
            ],
            "id": [
                284
            ],
            "name": [
                284
            ],
            "password": [
                284
            ],
            "phone": [
                284
            ],
            "updated_at": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "admins_pk_columns_input": {
            "id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "admins_select_column": {},
        "admins_set_input": {
            "created_at": [
                412
            ],
            "email": [
                99
            ],
            "id": [
                490
            ],
            "name": [
                99
            ],
            "password": [
                99
            ],
            "phone": [
                10
            ],
            "updated_at": [
                412
            ],
            "__typename": [
                10
            ]
        },
        "admins_update_column": {},
        "auth_methods": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "users_auth_logs": [
                439,
                {
                    "distinct_on": [
                        458,
                        "[users_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        456,
                        "[users_auth_logs_order_by!]"
                    ],
                    "where": [
                        446
                    ]
                }
            ],
            "users_auth_logs_aggregate": [
                440,
                {
                    "distinct_on": [
                        458,
                        "[users_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        456,
                        "[users_auth_logs_order_by!]"
                    ],
                    "where": [
                        446
                    ]
                }
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_aggregate": {
            "aggregate": [
                67
            ],
            "nodes": [
                65
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        80,
                        "[auth_methods_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                73
            ],
            "min": [
                74
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_bool_exp": {
            "_and": [
                68
            ],
            "_not": [
                68
            ],
            "_or": [
                68
            ],
            "comment": [
                11
            ],
            "name": [
                11
            ],
            "users_auth_logs": [
                446
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_constraint": {},
        "auth_methods_enum": {},
        "auth_methods_enum_comparison_exp": {
            "_eq": [
                70
            ],
            "_in": [
                70
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                70
            ],
            "_nin": [
                70
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_insert_input": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "users_auth_logs": [
                443
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_max_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_min_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                65
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_obj_rel_insert_input": {
            "data": [
                72
            ],
            "on_conflict": [
                77
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_on_conflict": {
            "constraint": [
                69
            ],
            "update_columns": [
                82
            ],
            "where": [
                68
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_order_by": {
            "comment": [
                284
            ],
            "name": [
                284
            ],
            "users_auth_logs_aggregate": [
                442
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_pk_columns_input": {
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_select_column": {},
        "auth_methods_set_input": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_update_column": {},
        "blacklist_refresh_token": {
            "sig": [
                10
            ],
            "user_id": [
                490
            ],
            "valid_till": [
                412
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_aggregate": {
            "aggregate": [
                85
            ],
            "nodes": [
                83
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        96,
                        "[blacklist_refresh_token_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                89
            ],
            "min": [
                90
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_bool_exp": {
            "_and": [
                86
            ],
            "_not": [
                86
            ],
            "_or": [
                86
            ],
            "sig": [
                11
            ],
            "user_id": [
                491
            ],
            "valid_till": [
                413
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_constraint": {},
        "blacklist_refresh_token_insert_input": {
            "sig": [
                10
            ],
            "user_id": [
                490
            ],
            "valid_till": [
                412
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_max_fields": {
            "sig": [
                10
            ],
            "user_id": [
                490
            ],
            "valid_till": [
                412
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_min_fields": {
            "sig": [
                10
            ],
            "user_id": [
                490
            ],
            "valid_till": [
                412
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                83
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_obj_rel_insert_input": {
            "data": [
                88
            ],
            "on_conflict": [
                93
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_on_conflict": {
            "constraint": [
                87
            ],
            "update_columns": [
                98
            ],
            "where": [
                86
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_order_by": {
            "sig": [
                284
            ],
            "user_id": [
                284
            ],
            "valid_till": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_pk_columns_input": {
            "sig": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_select_column": {},
        "blacklist_refresh_token_set_input": {
            "sig": [
                10
            ],
            "user_id": [
                490
            ],
            "valid_till": [
                412
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_update_column": {},
        "bpchar": {},
        "bpchar_comparison_exp": {
            "_eq": [
                99
            ],
            "_gt": [
                99
            ],
            "_gte": [
                99
            ],
            "_ilike": [
                99
            ],
            "_in": [
                99
            ],
            "_iregex": [
                99
            ],
            "_is_null": [
                0
            ],
            "_like": [
                99
            ],
            "_lt": [
                99
            ],
            "_lte": [
                99
            ],
            "_neq": [
                99
            ],
            "_nilike": [
                99
            ],
            "_nin": [
                99
            ],
            "_niregex": [
                99
            ],
            "_nlike": [
                99
            ],
            "_nregex": [
                99
            ],
            "_nsimilar": [
                99
            ],
            "_regex": [
                99
            ],
            "_similar": [
                99
            ],
            "__typename": [
                10
            ]
        },
        "connectors": {
            "comment": [
                10
            ],
            "customers": [
                193,
                {
                    "distinct_on": [
                        229,
                        "[customers_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        227,
                        "[customers_order_by!]"
                    ],
                    "where": [
                        200
                    ]
                }
            ],
            "customers_aggregate": [
                194,
                {
                    "distinct_on": [
                        229,
                        "[customers_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        227,
                        "[customers_order_by!]"
                    ],
                    "where": [
                        200
                    ]
                }
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "connectors_aggregate": {
            "aggregate": [
                103
            ],
            "nodes": [
                101
            ],
            "__typename": [
                10
            ]
        },
        "connectors_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        116,
                        "[connectors_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                109
            ],
            "min": [
                110
            ],
            "__typename": [
                10
            ]
        },
        "connectors_bool_exp": {
            "_and": [
                104
            ],
            "_not": [
                104
            ],
            "_or": [
                104
            ],
            "comment": [
                11
            ],
            "customers": [
                200
            ],
            "name": [
                11
            ],
            "__typename": [
                10
            ]
        },
        "connectors_constraint": {},
        "connectors_enum": {},
        "connectors_enum_comparison_exp": {
            "_eq": [
                106
            ],
            "_in": [
                106
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                106
            ],
            "_nin": [
                106
            ],
            "__typename": [
                10
            ]
        },
        "connectors_insert_input": {
            "comment": [
                10
            ],
            "customers": [
                197
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "connectors_max_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "connectors_min_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "connectors_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                101
            ],
            "__typename": [
                10
            ]
        },
        "connectors_obj_rel_insert_input": {
            "data": [
                108
            ],
            "on_conflict": [
                113
            ],
            "__typename": [
                10
            ]
        },
        "connectors_on_conflict": {
            "constraint": [
                105
            ],
            "update_columns": [
                118
            ],
            "where": [
                104
            ],
            "__typename": [
                10
            ]
        },
        "connectors_order_by": {
            "comment": [
                284
            ],
            "customers_aggregate": [
                196
            ],
            "name": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "connectors_pk_columns_input": {
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "connectors_select_column": {},
        "connectors_set_input": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "connectors_update_column": {},
        "customer_user": {
            "brukerBrukerNavn": [
                10
            ],
            "customer": [
                193
            ],
            "customer_id": [
                490
            ],
            "region": [
                4
            ],
            "user": [
                434
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_aggregate": {
            "aggregate": [
                121
            ],
            "nodes": [
                119
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_aggregate_fields": {
            "avg": [
                124
            ],
            "count": [
                4,
                {
                    "columns": [
                        138,
                        "[customer_user_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                130
            ],
            "min": [
                132
            ],
            "stddev": [
                159
            ],
            "stddev_pop": [
                161
            ],
            "stddev_samp": [
                163
            ],
            "sum": [
                184
            ],
            "var_pop": [
                187
            ],
            "var_samp": [
                189
            ],
            "variance": [
                191
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_aggregate_order_by": {
            "avg": [
                125
            ],
            "count": [
                284
            ],
            "max": [
                131
            ],
            "min": [
                133
            ],
            "stddev": [
                160
            ],
            "stddev_pop": [
                162
            ],
            "stddev_samp": [
                164
            ],
            "sum": [
                185
            ],
            "var_pop": [
                188
            ],
            "var_samp": [
                190
            ],
            "variance": [
                192
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_arr_rel_insert_input": {
            "data": [
                129
            ],
            "on_conflict": [
                135
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_avg_fields": {
            "region": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_avg_order_by": {
            "region": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_bool_exp": {
            "_and": [
                126
            ],
            "_not": [
                126
            ],
            "_or": [
                126
            ],
            "brukerBrukerNavn": [
                11
            ],
            "customer": [
                200
            ],
            "customer_id": [
                491
            ],
            "region": [
                5
            ],
            "user": [
                475
            ],
            "user_id": [
                491
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_constraint": {},
        "customer_user_inc_input": {
            "region": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_insert_input": {
            "brukerBrukerNavn": [
                10
            ],
            "customer": [
                225
            ],
            "customer_id": [
                490
            ],
            "region": [
                4
            ],
            "user": [
                483
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_max_fields": {
            "brukerBrukerNavn": [
                10
            ],
            "customer_id": [
                490
            ],
            "region": [
                4
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_max_order_by": {
            "brukerBrukerNavn": [
                284
            ],
            "customer_id": [
                284
            ],
            "region": [
                284
            ],
            "user_id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_min_fields": {
            "brukerBrukerNavn": [
                10
            ],
            "customer_id": [
                490
            ],
            "region": [
                4
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_min_order_by": {
            "brukerBrukerNavn": [
                284
            ],
            "customer_id": [
                284
            ],
            "region": [
                284
            ],
            "user_id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                119
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_on_conflict": {
            "constraint": [
                127
            ],
            "update_columns": [
                186
            ],
            "where": [
                126
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_order_by": {
            "brukerBrukerNavn": [
                284
            ],
            "customer": [
                227
            ],
            "customer_id": [
                284
            ],
            "region": [
                284
            ],
            "user": [
                485
            ],
            "user_id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_pk_columns_input": {
            "customer_id": [
                490
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_select_column": {},
        "customer_user_service": {
            "customer": [
                193
            ],
            "customer_id": [
                490
            ],
            "service": [
                324
            ],
            "serviceByService": [
                319
            ],
            "user": [
                434
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_aggregate": {
            "aggregate": [
                141
            ],
            "nodes": [
                139
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        155,
                        "[customer_user_service_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                147
            ],
            "min": [
                149
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_aggregate_order_by": {
            "count": [
                284
            ],
            "max": [
                148
            ],
            "min": [
                150
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_arr_rel_insert_input": {
            "data": [
                146
            ],
            "on_conflict": [
                152
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_bool_exp": {
            "_and": [
                144
            ],
            "_not": [
                144
            ],
            "_or": [
                144
            ],
            "customer": [
                200
            ],
            "customer_id": [
                491
            ],
            "service": [
                325
            ],
            "serviceByService": [
                322
            ],
            "user": [
                475
            ],
            "user_id": [
                491
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_constraint": {},
        "customer_user_service_insert_input": {
            "customer": [
                225
            ],
            "customer_id": [
                490
            ],
            "service": [
                324
            ],
            "serviceByService": [
                330
            ],
            "user": [
                483
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_max_fields": {
            "customer_id": [
                490
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_max_order_by": {
            "customer_id": [
                284
            ],
            "user_id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_min_fields": {
            "customer_id": [
                490
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_min_order_by": {
            "customer_id": [
                284
            ],
            "user_id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                139
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_on_conflict": {
            "constraint": [
                145
            ],
            "update_columns": [
                157
            ],
            "where": [
                144
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_order_by": {
            "customer": [
                227
            ],
            "customer_id": [
                284
            ],
            "service": [
                284
            ],
            "serviceByService": [
                332
            ],
            "user": [
                485
            ],
            "user_id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_pk_columns_input": {
            "customer_id": [
                490
            ],
            "service": [
                324
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_select_column": {},
        "customer_user_service_set_input": {
            "customer_id": [
                490
            ],
            "service": [
                324
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_update_column": {},
        "customer_user_set_input": {
            "brukerBrukerNavn": [
                10
            ],
            "customer_id": [
                490
            ],
            "region": [
                4
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_stddev_fields": {
            "region": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_stddev_order_by": {
            "region": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_stddev_pop_fields": {
            "region": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_stddev_pop_order_by": {
            "region": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_stddev_samp_fields": {
            "region": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_stddev_samp_order_by": {
            "region": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service": {
            "customer": [
                193
            ],
            "customer_id": [
                490
            ],
            "service": [
                324
            ],
            "serviceByService": [
                319
            ],
            "subServiceByServiceSubService": [
                392
            ],
            "subServiceBySubService": [
                392
            ],
            "sub_service": [
                10
            ],
            "user": [
                434
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_aggregate": {
            "aggregate": [
                167
            ],
            "nodes": [
                165
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        181,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                173
            ],
            "min": [
                175
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_aggregate_order_by": {
            "count": [
                284
            ],
            "max": [
                174
            ],
            "min": [
                176
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_arr_rel_insert_input": {
            "data": [
                172
            ],
            "on_conflict": [
                178
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_bool_exp": {
            "_and": [
                170
            ],
            "_not": [
                170
            ],
            "_or": [
                170
            ],
            "customer": [
                200
            ],
            "customer_id": [
                491
            ],
            "service": [
                325
            ],
            "serviceByService": [
                322
            ],
            "subServiceByServiceSubService": [
                397
            ],
            "subServiceBySubService": [
                397
            ],
            "sub_service": [
                11
            ],
            "user": [
                475
            ],
            "user_id": [
                491
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_constraint": {},
        "customer_user_sub_service_insert_input": {
            "customer": [
                225
            ],
            "customer_id": [
                490
            ],
            "service": [
                324
            ],
            "serviceByService": [
                330
            ],
            "subServiceByServiceSubService": [
                405
            ],
            "subServiceBySubService": [
                405
            ],
            "sub_service": [
                10
            ],
            "user": [
                483
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_max_fields": {
            "customer_id": [
                490
            ],
            "sub_service": [
                10
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_max_order_by": {
            "customer_id": [
                284
            ],
            "sub_service": [
                284
            ],
            "user_id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_min_fields": {
            "customer_id": [
                490
            ],
            "sub_service": [
                10
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_min_order_by": {
            "customer_id": [
                284
            ],
            "sub_service": [
                284
            ],
            "user_id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                165
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_on_conflict": {
            "constraint": [
                171
            ],
            "update_columns": [
                183
            ],
            "where": [
                170
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_order_by": {
            "customer": [
                227
            ],
            "customer_id": [
                284
            ],
            "service": [
                284
            ],
            "serviceByService": [
                332
            ],
            "subServiceByServiceSubService": [
                407
            ],
            "subServiceBySubService": [
                407
            ],
            "sub_service": [
                284
            ],
            "user": [
                485
            ],
            "user_id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_pk_columns_input": {
            "customer_id": [
                490
            ],
            "service": [
                324
            ],
            "sub_service": [
                10
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_select_column": {},
        "customer_user_sub_service_set_input": {
            "customer_id": [
                490
            ],
            "service": [
                324
            ],
            "sub_service": [
                10
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_update_column": {},
        "customer_user_sum_fields": {
            "region": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sum_order_by": {
            "region": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_update_column": {},
        "customer_user_var_pop_fields": {
            "region": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_var_pop_order_by": {
            "region": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_var_samp_fields": {
            "region": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_var_samp_order_by": {
            "region": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_variance_fields": {
            "region": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_variance_order_by": {
            "region": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customers": {
            "conn_string": [
                10
            ],
            "connector": [
                106
            ],
            "connectorByConnector": [
                101
            ],
            "created_at": [
                412
            ],
            "customer_srv_urls": [
                355,
                {
                    "distinct_on": [
                        371,
                        "[srv_urls_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        369,
                        "[srv_urls_order_by!]"
                    ],
                    "where": [
                        360
                    ]
                }
            ],
            "customer_srv_urls_aggregate": [
                356,
                {
                    "distinct_on": [
                        371,
                        "[srv_urls_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        369,
                        "[srv_urls_order_by!]"
                    ],
                    "where": [
                        360
                    ]
                }
            ],
            "customer_user_services": [
                139,
                {
                    "distinct_on": [
                        155,
                        "[customer_user_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        153,
                        "[customer_user_service_order_by!]"
                    ],
                    "where": [
                        144
                    ]
                }
            ],
            "customer_user_services_aggregate": [
                140,
                {
                    "distinct_on": [
                        155,
                        "[customer_user_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        153,
                        "[customer_user_service_order_by!]"
                    ],
                    "where": [
                        144
                    ]
                }
            ],
            "customer_user_sub_services": [
                165,
                {
                    "distinct_on": [
                        181,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        179,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        170
                    ]
                }
            ],
            "customer_user_sub_services_aggregate": [
                166,
                {
                    "distinct_on": [
                        181,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        179,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        170
                    ]
                }
            ],
            "customer_users": [
                119,
                {
                    "distinct_on": [
                        138,
                        "[customer_user_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        136,
                        "[customer_user_order_by!]"
                    ],
                    "where": [
                        126
                    ]
                }
            ],
            "customer_users_aggregate": [
                120,
                {
                    "distinct_on": [
                        138,
                        "[customer_user_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        136,
                        "[customer_user_order_by!]"
                    ],
                    "where": [
                        126
                    ]
                }
            ],
            "customers_contact": [
                202
            ],
            "deleted_at": [
                412
            ],
            "features": [
                264,
                {
                    "distinct_on": [
                        280,
                        "[features_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        278,
                        "[features_order_by!]"
                    ],
                    "where": [
                        269
                    ]
                }
            ],
            "features_aggregate": [
                265,
                {
                    "distinct_on": [
                        280,
                        "[features_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        278,
                        "[features_order_by!]"
                    ],
                    "where": [
                        269
                    ]
                }
            ],
            "id": [
                490
            ],
            "name": [
                10
            ],
            "org_nr": [
                10
            ],
            "partner": [
                285
            ],
            "partner_id": [
                490
            ],
            "refresh_token_validity": [
                4
            ],
            "status": [
                379
            ],
            "statusByStatus": [
                374
            ],
            "updated_at": [
                412
            ],
            "users_auth_logs": [
                439,
                {
                    "distinct_on": [
                        458,
                        "[users_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        456,
                        "[users_auth_logs_order_by!]"
                    ],
                    "where": [
                        446
                    ]
                }
            ],
            "users_auth_logs_aggregate": [
                440,
                {
                    "distinct_on": [
                        458,
                        "[users_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        456,
                        "[users_auth_logs_order_by!]"
                    ],
                    "where": [
                        446
                    ]
                }
            ],
            "__typename": [
                10
            ]
        },
        "customers_aggregate": {
            "aggregate": [
                195
            ],
            "nodes": [
                193
            ],
            "__typename": [
                10
            ]
        },
        "customers_aggregate_fields": {
            "avg": [
                198
            ],
            "count": [
                4,
                {
                    "columns": [
                        229,
                        "[customers_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                220
            ],
            "min": [
                222
            ],
            "stddev": [
                231
            ],
            "stddev_pop": [
                233
            ],
            "stddev_samp": [
                235
            ],
            "sum": [
                237
            ],
            "var_pop": [
                240
            ],
            "var_samp": [
                242
            ],
            "variance": [
                244
            ],
            "__typename": [
                10
            ]
        },
        "customers_aggregate_order_by": {
            "avg": [
                199
            ],
            "count": [
                284
            ],
            "max": [
                221
            ],
            "min": [
                223
            ],
            "stddev": [
                232
            ],
            "stddev_pop": [
                234
            ],
            "stddev_samp": [
                236
            ],
            "sum": [
                238
            ],
            "var_pop": [
                241
            ],
            "var_samp": [
                243
            ],
            "variance": [
                245
            ],
            "__typename": [
                10
            ]
        },
        "customers_arr_rel_insert_input": {
            "data": [
                219
            ],
            "on_conflict": [
                226
            ],
            "__typename": [
                10
            ]
        },
        "customers_avg_fields": {
            "refresh_token_validity": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "customers_avg_order_by": {
            "refresh_token_validity": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customers_bool_exp": {
            "_and": [
                200
            ],
            "_not": [
                200
            ],
            "_or": [
                200
            ],
            "conn_string": [
                11
            ],
            "connector": [
                107
            ],
            "connectorByConnector": [
                104
            ],
            "created_at": [
                413
            ],
            "customer_srv_urls": [
                360
            ],
            "customer_user_services": [
                144
            ],
            "customer_user_sub_services": [
                170
            ],
            "customer_users": [
                126
            ],
            "customers_contact": [
                205
            ],
            "deleted_at": [
                413
            ],
            "features": [
                269
            ],
            "id": [
                491
            ],
            "name": [
                11
            ],
            "org_nr": [
                11
            ],
            "partner": [
                288
            ],
            "partner_id": [
                491
            ],
            "refresh_token_validity": [
                5
            ],
            "status": [
                380
            ],
            "statusByStatus": [
                377
            ],
            "updated_at": [
                413
            ],
            "users_auth_logs": [
                446
            ],
            "__typename": [
                10
            ]
        },
        "customers_constraint": {},
        "customers_contact": {
            "comm_consents_descr": [
                10
            ],
            "customer": [
                193
            ],
            "customer_id": [
                490
            ],
            "email": [
                10
            ],
            "logo": [
                10
            ],
            "message": [
                10
            ],
            "tel": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_aggregate": {
            "aggregate": [
                204
            ],
            "nodes": [
                202
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        215,
                        "[customers_contact_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                208
            ],
            "min": [
                209
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_bool_exp": {
            "_and": [
                205
            ],
            "_not": [
                205
            ],
            "_or": [
                205
            ],
            "comm_consents_descr": [
                11
            ],
            "customer": [
                200
            ],
            "customer_id": [
                491
            ],
            "email": [
                11
            ],
            "logo": [
                11
            ],
            "message": [
                11
            ],
            "tel": [
                11
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_constraint": {},
        "customers_contact_insert_input": {
            "comm_consents_descr": [
                10
            ],
            "customer": [
                225
            ],
            "customer_id": [
                490
            ],
            "email": [
                10
            ],
            "logo": [
                10
            ],
            "message": [
                10
            ],
            "tel": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_max_fields": {
            "comm_consents_descr": [
                10
            ],
            "customer_id": [
                490
            ],
            "email": [
                10
            ],
            "logo": [
                10
            ],
            "message": [
                10
            ],
            "tel": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_min_fields": {
            "comm_consents_descr": [
                10
            ],
            "customer_id": [
                490
            ],
            "email": [
                10
            ],
            "logo": [
                10
            ],
            "message": [
                10
            ],
            "tel": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                202
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_obj_rel_insert_input": {
            "data": [
                207
            ],
            "on_conflict": [
                212
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_on_conflict": {
            "constraint": [
                206
            ],
            "update_columns": [
                217
            ],
            "where": [
                205
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_order_by": {
            "comm_consents_descr": [
                284
            ],
            "customer": [
                227
            ],
            "customer_id": [
                284
            ],
            "email": [
                284
            ],
            "logo": [
                284
            ],
            "message": [
                284
            ],
            "tel": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_pk_columns_input": {
            "customer_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_select_column": {},
        "customers_contact_set_input": {
            "comm_consents_descr": [
                10
            ],
            "customer_id": [
                490
            ],
            "email": [
                10
            ],
            "logo": [
                10
            ],
            "message": [
                10
            ],
            "tel": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_update_column": {},
        "customers_inc_input": {
            "refresh_token_validity": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "customers_insert_input": {
            "conn_string": [
                10
            ],
            "connector": [
                106
            ],
            "connectorByConnector": [
                112
            ],
            "created_at": [
                412
            ],
            "customer_srv_urls": [
                359
            ],
            "customer_user_services": [
                143
            ],
            "customer_user_sub_services": [
                169
            ],
            "customer_users": [
                123
            ],
            "customers_contact": [
                211
            ],
            "deleted_at": [
                412
            ],
            "features": [
                268
            ],
            "id": [
                490
            ],
            "name": [
                10
            ],
            "org_nr": [
                10
            ],
            "partner": [
                294
            ],
            "partner_id": [
                490
            ],
            "refresh_token_validity": [
                4
            ],
            "status": [
                379
            ],
            "statusByStatus": [
                385
            ],
            "updated_at": [
                412
            ],
            "users_auth_logs": [
                443
            ],
            "__typename": [
                10
            ]
        },
        "customers_max_fields": {
            "conn_string": [
                10
            ],
            "created_at": [
                412
            ],
            "deleted_at": [
                412
            ],
            "id": [
                490
            ],
            "name": [
                10
            ],
            "org_nr": [
                10
            ],
            "partner_id": [
                490
            ],
            "refresh_token_validity": [
                4
            ],
            "updated_at": [
                412
            ],
            "__typename": [
                10
            ]
        },
        "customers_max_order_by": {
            "conn_string": [
                284
            ],
            "created_at": [
                284
            ],
            "deleted_at": [
                284
            ],
            "id": [
                284
            ],
            "name": [
                284
            ],
            "org_nr": [
                284
            ],
            "partner_id": [
                284
            ],
            "refresh_token_validity": [
                284
            ],
            "updated_at": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customers_min_fields": {
            "conn_string": [
                10
            ],
            "created_at": [
                412
            ],
            "deleted_at": [
                412
            ],
            "id": [
                490
            ],
            "name": [
                10
            ],
            "org_nr": [
                10
            ],
            "partner_id": [
                490
            ],
            "refresh_token_validity": [
                4
            ],
            "updated_at": [
                412
            ],
            "__typename": [
                10
            ]
        },
        "customers_min_order_by": {
            "conn_string": [
                284
            ],
            "created_at": [
                284
            ],
            "deleted_at": [
                284
            ],
            "id": [
                284
            ],
            "name": [
                284
            ],
            "org_nr": [
                284
            ],
            "partner_id": [
                284
            ],
            "refresh_token_validity": [
                284
            ],
            "updated_at": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customers_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                193
            ],
            "__typename": [
                10
            ]
        },
        "customers_obj_rel_insert_input": {
            "data": [
                219
            ],
            "on_conflict": [
                226
            ],
            "__typename": [
                10
            ]
        },
        "customers_on_conflict": {
            "constraint": [
                201
            ],
            "update_columns": [
                239
            ],
            "where": [
                200
            ],
            "__typename": [
                10
            ]
        },
        "customers_order_by": {
            "conn_string": [
                284
            ],
            "connector": [
                284
            ],
            "connectorByConnector": [
                114
            ],
            "created_at": [
                284
            ],
            "customer_srv_urls_aggregate": [
                358
            ],
            "customer_user_services_aggregate": [
                142
            ],
            "customer_user_sub_services_aggregate": [
                168
            ],
            "customer_users_aggregate": [
                122
            ],
            "customers_contact": [
                213
            ],
            "deleted_at": [
                284
            ],
            "features_aggregate": [
                267
            ],
            "id": [
                284
            ],
            "name": [
                284
            ],
            "org_nr": [
                284
            ],
            "partner": [
                296
            ],
            "partner_id": [
                284
            ],
            "refresh_token_validity": [
                284
            ],
            "status": [
                284
            ],
            "statusByStatus": [
                387
            ],
            "updated_at": [
                284
            ],
            "users_auth_logs_aggregate": [
                442
            ],
            "__typename": [
                10
            ]
        },
        "customers_pk_columns_input": {
            "id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "customers_select_column": {},
        "customers_set_input": {
            "conn_string": [
                10
            ],
            "connector": [
                106
            ],
            "created_at": [
                412
            ],
            "deleted_at": [
                412
            ],
            "id": [
                490
            ],
            "name": [
                10
            ],
            "org_nr": [
                10
            ],
            "partner_id": [
                490
            ],
            "refresh_token_validity": [
                4
            ],
            "status": [
                379
            ],
            "updated_at": [
                412
            ],
            "__typename": [
                10
            ]
        },
        "customers_stddev_fields": {
            "refresh_token_validity": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "customers_stddev_order_by": {
            "refresh_token_validity": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customers_stddev_pop_fields": {
            "refresh_token_validity": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "customers_stddev_pop_order_by": {
            "refresh_token_validity": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customers_stddev_samp_fields": {
            "refresh_token_validity": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "customers_stddev_samp_order_by": {
            "refresh_token_validity": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customers_sum_fields": {
            "refresh_token_validity": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "customers_sum_order_by": {
            "refresh_token_validity": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customers_update_column": {},
        "customers_var_pop_fields": {
            "refresh_token_validity": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "customers_var_pop_order_by": {
            "refresh_token_validity": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customers_var_samp_fields": {
            "refresh_token_validity": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "customers_var_samp_order_by": {
            "refresh_token_validity": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "customers_variance_fields": {
            "refresh_token_validity": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "customers_variance_order_by": {
            "refresh_token_validity": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "feature_names": {
            "description": [
                10
            ],
            "features": [
                264,
                {
                    "distinct_on": [
                        280,
                        "[features_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        278,
                        "[features_order_by!]"
                    ],
                    "where": [
                        269
                    ]
                }
            ],
            "features_aggregate": [
                265,
                {
                    "distinct_on": [
                        280,
                        "[features_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        278,
                        "[features_order_by!]"
                    ],
                    "where": [
                        269
                    ]
                }
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_aggregate": {
            "aggregate": [
                248
            ],
            "nodes": [
                246
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        261,
                        "[feature_names_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                254
            ],
            "min": [
                255
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_bool_exp": {
            "_and": [
                249
            ],
            "_not": [
                249
            ],
            "_or": [
                249
            ],
            "description": [
                11
            ],
            "features": [
                269
            ],
            "name": [
                11
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_constraint": {},
        "feature_names_enum": {},
        "feature_names_enum_comparison_exp": {
            "_eq": [
                251
            ],
            "_in": [
                251
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                251
            ],
            "_nin": [
                251
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_insert_input": {
            "description": [
                10
            ],
            "features": [
                268
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_max_fields": {
            "description": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_min_fields": {
            "description": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                246
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_obj_rel_insert_input": {
            "data": [
                253
            ],
            "on_conflict": [
                258
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_on_conflict": {
            "constraint": [
                250
            ],
            "update_columns": [
                263
            ],
            "where": [
                249
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_order_by": {
            "description": [
                284
            ],
            "features_aggregate": [
                267
            ],
            "name": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_pk_columns_input": {
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_select_column": {},
        "feature_names_set_input": {
            "description": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_update_column": {},
        "features": {
            "customer": [
                193
            ],
            "customer_id": [
                490
            ],
            "feature_name": [
                246
            ],
            "name": [
                251
            ],
            "__typename": [
                10
            ]
        },
        "features_aggregate": {
            "aggregate": [
                266
            ],
            "nodes": [
                264
            ],
            "__typename": [
                10
            ]
        },
        "features_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        280,
                        "[features_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                272
            ],
            "min": [
                274
            ],
            "__typename": [
                10
            ]
        },
        "features_aggregate_order_by": {
            "count": [
                284
            ],
            "max": [
                273
            ],
            "min": [
                275
            ],
            "__typename": [
                10
            ]
        },
        "features_arr_rel_insert_input": {
            "data": [
                271
            ],
            "on_conflict": [
                277
            ],
            "__typename": [
                10
            ]
        },
        "features_bool_exp": {
            "_and": [
                269
            ],
            "_not": [
                269
            ],
            "_or": [
                269
            ],
            "customer": [
                200
            ],
            "customer_id": [
                491
            ],
            "feature_name": [
                249
            ],
            "name": [
                252
            ],
            "__typename": [
                10
            ]
        },
        "features_constraint": {},
        "features_insert_input": {
            "customer": [
                225
            ],
            "customer_id": [
                490
            ],
            "feature_name": [
                257
            ],
            "name": [
                251
            ],
            "__typename": [
                10
            ]
        },
        "features_max_fields": {
            "customer_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "features_max_order_by": {
            "customer_id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "features_min_fields": {
            "customer_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "features_min_order_by": {
            "customer_id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "features_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                264
            ],
            "__typename": [
                10
            ]
        },
        "features_on_conflict": {
            "constraint": [
                270
            ],
            "update_columns": [
                282
            ],
            "where": [
                269
            ],
            "__typename": [
                10
            ]
        },
        "features_order_by": {
            "customer": [
                227
            ],
            "customer_id": [
                284
            ],
            "feature_name": [
                259
            ],
            "name": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "features_pk_columns_input": {
            "customer_id": [
                490
            ],
            "name": [
                251
            ],
            "__typename": [
                10
            ]
        },
        "features_select_column": {},
        "features_set_input": {
            "customer_id": [
                490
            ],
            "name": [
                251
            ],
            "__typename": [
                10
            ]
        },
        "features_update_column": {},
        "getCustomersAndCountUsersOutput": {
            "conn_string": [
                10
            ],
            "connector": [
                10
            ],
            "customerFeatures": [
                264,
                {
                    "distinct_on": [
                        280,
                        "[features_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        278,
                        "[features_order_by!]"
                    ],
                    "where": [
                        269
                    ]
                }
            ],
            "customerFeatures_aggregate": [
                265,
                {
                    "distinct_on": [
                        280,
                        "[features_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        278,
                        "[features_order_by!]"
                    ],
                    "where": [
                        269
                    ]
                }
            ],
            "customerSrvUrls": [
                355,
                {
                    "distinct_on": [
                        371,
                        "[srv_urls_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        369,
                        "[srv_urls_order_by!]"
                    ],
                    "where": [
                        360
                    ]
                }
            ],
            "customerSrvUrls_aggregate": [
                356,
                {
                    "distinct_on": [
                        371,
                        "[srv_urls_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        369,
                        "[srv_urls_order_by!]"
                    ],
                    "where": [
                        360
                    ]
                }
            ],
            "customersContact": [
                202
            ],
            "id": [
                10
            ],
            "name": [
                10
            ],
            "refresh_token_validity": [
                4
            ],
            "users_count": [
                4
            ],
            "x_api_key": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "order_by": {},
        "partners": {
            "customers": [
                193,
                {
                    "distinct_on": [
                        229,
                        "[customers_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        227,
                        "[customers_order_by!]"
                    ],
                    "where": [
                        200
                    ]
                }
            ],
            "customers_aggregate": [
                194,
                {
                    "distinct_on": [
                        229,
                        "[customers_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        227,
                        "[customers_order_by!]"
                    ],
                    "where": [
                        200
                    ]
                }
            ],
            "id": [
                490
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "partners_aggregate": {
            "aggregate": [
                287
            ],
            "nodes": [
                285
            ],
            "__typename": [
                10
            ]
        },
        "partners_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        298,
                        "[partners_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                291
            ],
            "min": [
                292
            ],
            "__typename": [
                10
            ]
        },
        "partners_bool_exp": {
            "_and": [
                288
            ],
            "_not": [
                288
            ],
            "_or": [
                288
            ],
            "customers": [
                200
            ],
            "id": [
                491
            ],
            "name": [
                11
            ],
            "__typename": [
                10
            ]
        },
        "partners_constraint": {},
        "partners_insert_input": {
            "customers": [
                197
            ],
            "id": [
                490
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "partners_max_fields": {
            "id": [
                490
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "partners_min_fields": {
            "id": [
                490
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "partners_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                285
            ],
            "__typename": [
                10
            ]
        },
        "partners_obj_rel_insert_input": {
            "data": [
                290
            ],
            "on_conflict": [
                295
            ],
            "__typename": [
                10
            ]
        },
        "partners_on_conflict": {
            "constraint": [
                289
            ],
            "update_columns": [
                300
            ],
            "where": [
                288
            ],
            "__typename": [
                10
            ]
        },
        "partners_order_by": {
            "customers_aggregate": [
                196
            ],
            "id": [
                284
            ],
            "name": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "partners_pk_columns_input": {
            "id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "partners_select_column": {},
        "partners_set_input": {
            "id": [
                490
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "partners_update_column": {},
        "roles": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "users": [
                434,
                {
                    "distinct_on": [
                        487,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        485,
                        "[users_order_by!]"
                    ],
                    "where": [
                        475
                    ]
                }
            ],
            "users_aggregate": [
                435,
                {
                    "distinct_on": [
                        487,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        485,
                        "[users_order_by!]"
                    ],
                    "where": [
                        475
                    ]
                }
            ],
            "__typename": [
                10
            ]
        },
        "roles_aggregate": {
            "aggregate": [
                303
            ],
            "nodes": [
                301
            ],
            "__typename": [
                10
            ]
        },
        "roles_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        316,
                        "[roles_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                309
            ],
            "min": [
                310
            ],
            "__typename": [
                10
            ]
        },
        "roles_bool_exp": {
            "_and": [
                304
            ],
            "_not": [
                304
            ],
            "_or": [
                304
            ],
            "comment": [
                11
            ],
            "name": [
                11
            ],
            "users": [
                475
            ],
            "__typename": [
                10
            ]
        },
        "roles_constraint": {},
        "roles_enum": {},
        "roles_enum_comparison_exp": {
            "_eq": [
                306
            ],
            "_in": [
                306
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                306
            ],
            "_nin": [
                306
            ],
            "__typename": [
                10
            ]
        },
        "roles_insert_input": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "users": [
                438
            ],
            "__typename": [
                10
            ]
        },
        "roles_max_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "roles_min_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "roles_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                301
            ],
            "__typename": [
                10
            ]
        },
        "roles_obj_rel_insert_input": {
            "data": [
                308
            ],
            "on_conflict": [
                313
            ],
            "__typename": [
                10
            ]
        },
        "roles_on_conflict": {
            "constraint": [
                305
            ],
            "update_columns": [
                318
            ],
            "where": [
                304
            ],
            "__typename": [
                10
            ]
        },
        "roles_order_by": {
            "comment": [
                284
            ],
            "name": [
                284
            ],
            "users_aggregate": [
                437
            ],
            "__typename": [
                10
            ]
        },
        "roles_pk_columns_input": {
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "roles_select_column": {},
        "roles_set_input": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "roles_update_column": {},
        "services": {
            "comment": [
                10
            ],
            "customer_user_services": [
                139,
                {
                    "distinct_on": [
                        155,
                        "[customer_user_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        153,
                        "[customer_user_service_order_by!]"
                    ],
                    "where": [
                        144
                    ]
                }
            ],
            "customer_user_services_aggregate": [
                140,
                {
                    "distinct_on": [
                        155,
                        "[customer_user_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        153,
                        "[customer_user_service_order_by!]"
                    ],
                    "where": [
                        144
                    ]
                }
            ],
            "customer_user_sub_services": [
                165,
                {
                    "distinct_on": [
                        181,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        179,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        170
                    ]
                }
            ],
            "customer_user_sub_services_aggregate": [
                166,
                {
                    "distinct_on": [
                        181,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        179,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        170
                    ]
                }
            ],
            "name": [
                10
            ],
            "sub_services": [
                392,
                {
                    "distinct_on": [
                        409,
                        "[sub_services_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        407,
                        "[sub_services_order_by!]"
                    ],
                    "where": [
                        397
                    ]
                }
            ],
            "sub_services_aggregate": [
                393,
                {
                    "distinct_on": [
                        409,
                        "[sub_services_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        407,
                        "[sub_services_order_by!]"
                    ],
                    "where": [
                        397
                    ]
                }
            ],
            "__typename": [
                10
            ]
        },
        "services_aggregate": {
            "aggregate": [
                321
            ],
            "nodes": [
                319
            ],
            "__typename": [
                10
            ]
        },
        "services_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        334,
                        "[services_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                327
            ],
            "min": [
                328
            ],
            "__typename": [
                10
            ]
        },
        "services_bool_exp": {
            "_and": [
                322
            ],
            "_not": [
                322
            ],
            "_or": [
                322
            ],
            "comment": [
                11
            ],
            "customer_user_services": [
                144
            ],
            "customer_user_sub_services": [
                170
            ],
            "name": [
                11
            ],
            "sub_services": [
                397
            ],
            "__typename": [
                10
            ]
        },
        "services_constraint": {},
        "services_enum": {},
        "services_enum_comparison_exp": {
            "_eq": [
                324
            ],
            "_in": [
                324
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                324
            ],
            "_nin": [
                324
            ],
            "__typename": [
                10
            ]
        },
        "services_insert_input": {
            "comment": [
                10
            ],
            "customer_user_services": [
                143
            ],
            "customer_user_sub_services": [
                169
            ],
            "name": [
                10
            ],
            "sub_services": [
                396
            ],
            "__typename": [
                10
            ]
        },
        "services_max_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "services_min_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "services_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                319
            ],
            "__typename": [
                10
            ]
        },
        "services_obj_rel_insert_input": {
            "data": [
                326
            ],
            "on_conflict": [
                331
            ],
            "__typename": [
                10
            ]
        },
        "services_on_conflict": {
            "constraint": [
                323
            ],
            "update_columns": [
                336
            ],
            "where": [
                322
            ],
            "__typename": [
                10
            ]
        },
        "services_order_by": {
            "comment": [
                284
            ],
            "customer_user_services_aggregate": [
                142
            ],
            "customer_user_sub_services_aggregate": [
                168
            ],
            "name": [
                284
            ],
            "sub_services_aggregate": [
                395
            ],
            "__typename": [
                10
            ]
        },
        "services_pk_columns_input": {
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "services_select_column": {},
        "services_set_input": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "services_update_column": {},
        "srv_names": {
            "description": [
                10
            ],
            "name": [
                10
            ],
            "srv_urls": [
                355,
                {
                    "distinct_on": [
                        371,
                        "[srv_urls_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        369,
                        "[srv_urls_order_by!]"
                    ],
                    "where": [
                        360
                    ]
                }
            ],
            "srv_urls_aggregate": [
                356,
                {
                    "distinct_on": [
                        371,
                        "[srv_urls_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        369,
                        "[srv_urls_order_by!]"
                    ],
                    "where": [
                        360
                    ]
                }
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_aggregate": {
            "aggregate": [
                339
            ],
            "nodes": [
                337
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        352,
                        "[srv_names_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                345
            ],
            "min": [
                346
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_bool_exp": {
            "_and": [
                340
            ],
            "_not": [
                340
            ],
            "_or": [
                340
            ],
            "description": [
                11
            ],
            "name": [
                11
            ],
            "srv_urls": [
                360
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_constraint": {},
        "srv_names_enum": {},
        "srv_names_enum_comparison_exp": {
            "_eq": [
                342
            ],
            "_in": [
                342
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                342
            ],
            "_nin": [
                342
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_insert_input": {
            "description": [
                10
            ],
            "name": [
                10
            ],
            "srv_urls": [
                359
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_max_fields": {
            "description": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_min_fields": {
            "description": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                337
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_obj_rel_insert_input": {
            "data": [
                344
            ],
            "on_conflict": [
                349
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_on_conflict": {
            "constraint": [
                341
            ],
            "update_columns": [
                354
            ],
            "where": [
                340
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_order_by": {
            "description": [
                284
            ],
            "name": [
                284
            ],
            "srv_urls_aggregate": [
                358
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_pk_columns_input": {
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_select_column": {},
        "srv_names_set_input": {
            "description": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_update_column": {},
        "srv_urls": {
            "customer": [
                193
            ],
            "customer_id": [
                490
            ],
            "name": [
                342
            ],
            "srv_name": [
                337
            ],
            "url": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_aggregate": {
            "aggregate": [
                357
            ],
            "nodes": [
                355
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        371,
                        "[srv_urls_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                363
            ],
            "min": [
                365
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_aggregate_order_by": {
            "count": [
                284
            ],
            "max": [
                364
            ],
            "min": [
                366
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_arr_rel_insert_input": {
            "data": [
                362
            ],
            "on_conflict": [
                368
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_bool_exp": {
            "_and": [
                360
            ],
            "_not": [
                360
            ],
            "_or": [
                360
            ],
            "customer": [
                200
            ],
            "customer_id": [
                491
            ],
            "name": [
                343
            ],
            "srv_name": [
                340
            ],
            "url": [
                11
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_constraint": {},
        "srv_urls_insert_input": {
            "customer": [
                225
            ],
            "customer_id": [
                490
            ],
            "name": [
                342
            ],
            "srv_name": [
                348
            ],
            "url": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_max_fields": {
            "customer_id": [
                490
            ],
            "url": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_max_order_by": {
            "customer_id": [
                284
            ],
            "url": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_min_fields": {
            "customer_id": [
                490
            ],
            "url": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_min_order_by": {
            "customer_id": [
                284
            ],
            "url": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                355
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_on_conflict": {
            "constraint": [
                361
            ],
            "update_columns": [
                373
            ],
            "where": [
                360
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_order_by": {
            "customer": [
                227
            ],
            "customer_id": [
                284
            ],
            "name": [
                284
            ],
            "srv_name": [
                350
            ],
            "url": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_pk_columns_input": {
            "customer_id": [
                490
            ],
            "name": [
                342
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_select_column": {},
        "srv_urls_set_input": {
            "customer_id": [
                490
            ],
            "name": [
                342
            ],
            "url": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_update_column": {},
        "status": {
            "comment": [
                10
            ],
            "customers": [
                193,
                {
                    "distinct_on": [
                        229,
                        "[customers_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        227,
                        "[customers_order_by!]"
                    ],
                    "where": [
                        200
                    ]
                }
            ],
            "customers_aggregate": [
                194,
                {
                    "distinct_on": [
                        229,
                        "[customers_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        227,
                        "[customers_order_by!]"
                    ],
                    "where": [
                        200
                    ]
                }
            ],
            "name": [
                10
            ],
            "user_basic_data": [
                414,
                {
                    "distinct_on": [
                        431,
                        "[user_basic_data_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        429,
                        "[user_basic_data_order_by!]"
                    ],
                    "where": [
                        419
                    ]
                }
            ],
            "user_basic_data_aggregate": [
                415,
                {
                    "distinct_on": [
                        431,
                        "[user_basic_data_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        429,
                        "[user_basic_data_order_by!]"
                    ],
                    "where": [
                        419
                    ]
                }
            ],
            "__typename": [
                10
            ]
        },
        "status_aggregate": {
            "aggregate": [
                376
            ],
            "nodes": [
                374
            ],
            "__typename": [
                10
            ]
        },
        "status_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        389,
                        "[status_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                382
            ],
            "min": [
                383
            ],
            "__typename": [
                10
            ]
        },
        "status_bool_exp": {
            "_and": [
                377
            ],
            "_not": [
                377
            ],
            "_or": [
                377
            ],
            "comment": [
                11
            ],
            "customers": [
                200
            ],
            "name": [
                11
            ],
            "user_basic_data": [
                419
            ],
            "__typename": [
                10
            ]
        },
        "status_constraint": {},
        "status_enum": {},
        "status_enum_comparison_exp": {
            "_eq": [
                379
            ],
            "_in": [
                379
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                379
            ],
            "_nin": [
                379
            ],
            "__typename": [
                10
            ]
        },
        "status_insert_input": {
            "comment": [
                10
            ],
            "customers": [
                197
            ],
            "name": [
                10
            ],
            "user_basic_data": [
                418
            ],
            "__typename": [
                10
            ]
        },
        "status_max_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "status_min_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "status_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                374
            ],
            "__typename": [
                10
            ]
        },
        "status_obj_rel_insert_input": {
            "data": [
                381
            ],
            "on_conflict": [
                386
            ],
            "__typename": [
                10
            ]
        },
        "status_on_conflict": {
            "constraint": [
                378
            ],
            "update_columns": [
                391
            ],
            "where": [
                377
            ],
            "__typename": [
                10
            ]
        },
        "status_order_by": {
            "comment": [
                284
            ],
            "customers_aggregate": [
                196
            ],
            "name": [
                284
            ],
            "user_basic_data_aggregate": [
                417
            ],
            "__typename": [
                10
            ]
        },
        "status_pk_columns_input": {
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "status_select_column": {},
        "status_set_input": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "status_update_column": {},
        "sub_services": {
            "comment": [
                10
            ],
            "customer_user_sub_services": [
                165,
                {
                    "distinct_on": [
                        181,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        179,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        170
                    ]
                }
            ],
            "customer_user_sub_services_aggregate": [
                166,
                {
                    "distinct_on": [
                        181,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        179,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        170
                    ]
                }
            ],
            "name": [
                10
            ],
            "service": [
                324
            ],
            "serviceByService": [
                319
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_aggregate": {
            "aggregate": [
                394
            ],
            "nodes": [
                392
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        409,
                        "[sub_services_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                400
            ],
            "min": [
                402
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_aggregate_order_by": {
            "count": [
                284
            ],
            "max": [
                401
            ],
            "min": [
                403
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_arr_rel_insert_input": {
            "data": [
                399
            ],
            "on_conflict": [
                406
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_bool_exp": {
            "_and": [
                397
            ],
            "_not": [
                397
            ],
            "_or": [
                397
            ],
            "comment": [
                11
            ],
            "customer_user_sub_services": [
                170
            ],
            "name": [
                11
            ],
            "service": [
                325
            ],
            "serviceByService": [
                322
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_constraint": {},
        "sub_services_insert_input": {
            "comment": [
                10
            ],
            "customer_user_sub_services": [
                169
            ],
            "name": [
                10
            ],
            "service": [
                324
            ],
            "serviceByService": [
                330
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_max_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_max_order_by": {
            "comment": [
                284
            ],
            "name": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_min_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_min_order_by": {
            "comment": [
                284
            ],
            "name": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                392
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_obj_rel_insert_input": {
            "data": [
                399
            ],
            "on_conflict": [
                406
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_on_conflict": {
            "constraint": [
                398
            ],
            "update_columns": [
                411
            ],
            "where": [
                397
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_order_by": {
            "comment": [
                284
            ],
            "customer_user_sub_services_aggregate": [
                168
            ],
            "name": [
                284
            ],
            "service": [
                284
            ],
            "serviceByService": [
                332
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_pk_columns_input": {
            "name": [
                10
            ],
            "service": [
                324
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_select_column": {},
        "sub_services_set_input": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "service": [
                324
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_update_column": {},
        "timestamptz": {},
        "timestamptz_comparison_exp": {
            "_eq": [
                412
            ],
            "_gt": [
                412
            ],
            "_gte": [
                412
            ],
            "_in": [
                412
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                412
            ],
            "_lte": [
                412
            ],
            "_neq": [
                412
            ],
            "_nin": [
                412
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data": {
            "email": [
                99
            ],
            "name": [
                99
            ],
            "password": [
                99
            ],
            "status": [
                379
            ],
            "statusByStatus": [
                374
            ],
            "user": [
                434
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_aggregate": {
            "aggregate": [
                416
            ],
            "nodes": [
                414
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        431,
                        "[user_basic_data_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                422
            ],
            "min": [
                424
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_aggregate_order_by": {
            "count": [
                284
            ],
            "max": [
                423
            ],
            "min": [
                425
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_arr_rel_insert_input": {
            "data": [
                421
            ],
            "on_conflict": [
                428
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_bool_exp": {
            "_and": [
                419
            ],
            "_not": [
                419
            ],
            "_or": [
                419
            ],
            "email": [
                100
            ],
            "name": [
                100
            ],
            "password": [
                100
            ],
            "status": [
                380
            ],
            "statusByStatus": [
                377
            ],
            "user": [
                475
            ],
            "user_id": [
                491
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_constraint": {},
        "user_basic_data_insert_input": {
            "email": [
                99
            ],
            "name": [
                99
            ],
            "password": [
                99
            ],
            "status": [
                379
            ],
            "statusByStatus": [
                385
            ],
            "user": [
                483
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_max_fields": {
            "email": [
                99
            ],
            "name": [
                99
            ],
            "password": [
                99
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_max_order_by": {
            "email": [
                284
            ],
            "name": [
                284
            ],
            "password": [
                284
            ],
            "user_id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_min_fields": {
            "email": [
                99
            ],
            "name": [
                99
            ],
            "password": [
                99
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_min_order_by": {
            "email": [
                284
            ],
            "name": [
                284
            ],
            "password": [
                284
            ],
            "user_id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                414
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_obj_rel_insert_input": {
            "data": [
                421
            ],
            "on_conflict": [
                428
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_on_conflict": {
            "constraint": [
                420
            ],
            "update_columns": [
                433
            ],
            "where": [
                419
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_order_by": {
            "email": [
                284
            ],
            "name": [
                284
            ],
            "password": [
                284
            ],
            "status": [
                284
            ],
            "statusByStatus": [
                387
            ],
            "user": [
                485
            ],
            "user_id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_pk_columns_input": {
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_select_column": {},
        "user_basic_data_set_input": {
            "email": [
                99
            ],
            "name": [
                99
            ],
            "password": [
                99
            ],
            "status": [
                379
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_update_column": {},
        "users": {
            "created_at": [
                412
            ],
            "customer_user_services": [
                139,
                {
                    "distinct_on": [
                        155,
                        "[customer_user_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        153,
                        "[customer_user_service_order_by!]"
                    ],
                    "where": [
                        144
                    ]
                }
            ],
            "customer_user_services_aggregate": [
                140,
                {
                    "distinct_on": [
                        155,
                        "[customer_user_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        153,
                        "[customer_user_service_order_by!]"
                    ],
                    "where": [
                        144
                    ]
                }
            ],
            "customer_user_sub_services": [
                165,
                {
                    "distinct_on": [
                        181,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        179,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        170
                    ]
                }
            ],
            "customer_user_sub_services_aggregate": [
                166,
                {
                    "distinct_on": [
                        181,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        179,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        170
                    ]
                }
            ],
            "customer_users": [
                119,
                {
                    "distinct_on": [
                        138,
                        "[customer_user_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        136,
                        "[customer_user_order_by!]"
                    ],
                    "where": [
                        126
                    ]
                }
            ],
            "customer_users_aggregate": [
                120,
                {
                    "distinct_on": [
                        138,
                        "[customer_user_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        136,
                        "[customer_user_order_by!]"
                    ],
                    "where": [
                        126
                    ]
                }
            ],
            "id": [
                490
            ],
            "phone": [
                10
            ],
            "role": [
                306
            ],
            "roleByRole": [
                301
            ],
            "token": [
                99
            ],
            "updated_at": [
                412
            ],
            "user_basic_data": [
                414
            ],
            "user_refresh_tokens": [
                83
            ],
            "users_auth_logs": [
                439,
                {
                    "distinct_on": [
                        458,
                        "[users_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        456,
                        "[users_auth_logs_order_by!]"
                    ],
                    "where": [
                        446
                    ]
                }
            ],
            "users_auth_logs_aggregate": [
                440,
                {
                    "distinct_on": [
                        458,
                        "[users_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        456,
                        "[users_auth_logs_order_by!]"
                    ],
                    "where": [
                        446
                    ]
                }
            ],
            "__typename": [
                10
            ]
        },
        "users_aggregate": {
            "aggregate": [
                436
            ],
            "nodes": [
                434
            ],
            "__typename": [
                10
            ]
        },
        "users_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        487,
                        "[users_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                478
            ],
            "min": [
                480
            ],
            "__typename": [
                10
            ]
        },
        "users_aggregate_order_by": {
            "count": [
                284
            ],
            "max": [
                479
            ],
            "min": [
                481
            ],
            "__typename": [
                10
            ]
        },
        "users_arr_rel_insert_input": {
            "data": [
                477
            ],
            "on_conflict": [
                484
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs": {
            "authMethodByAuthMethod": [
                65
            ],
            "auth_method": [
                70
            ],
            "authenticated_at": [
                412
            ],
            "customer": [
                193
            ],
            "customer_id": [
                490
            ],
            "id": [
                4
            ],
            "user": [
                434
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_aggregate": {
            "aggregate": [
                441
            ],
            "nodes": [
                439
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_aggregate_fields": {
            "avg": [
                444
            ],
            "count": [
                4,
                {
                    "columns": [
                        458,
                        "[users_auth_logs_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                450
            ],
            "min": [
                452
            ],
            "stddev": [
                460
            ],
            "stddev_pop": [
                462
            ],
            "stddev_samp": [
                464
            ],
            "sum": [
                466
            ],
            "var_pop": [
                469
            ],
            "var_samp": [
                471
            ],
            "variance": [
                473
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_aggregate_order_by": {
            "avg": [
                445
            ],
            "count": [
                284
            ],
            "max": [
                451
            ],
            "min": [
                453
            ],
            "stddev": [
                461
            ],
            "stddev_pop": [
                463
            ],
            "stddev_samp": [
                465
            ],
            "sum": [
                467
            ],
            "var_pop": [
                470
            ],
            "var_samp": [
                472
            ],
            "variance": [
                474
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_arr_rel_insert_input": {
            "data": [
                449
            ],
            "on_conflict": [
                455
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_avg_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_avg_order_by": {
            "id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_bool_exp": {
            "_and": [
                446
            ],
            "_not": [
                446
            ],
            "_or": [
                446
            ],
            "authMethodByAuthMethod": [
                68
            ],
            "auth_method": [
                71
            ],
            "authenticated_at": [
                413
            ],
            "customer": [
                200
            ],
            "customer_id": [
                491
            ],
            "id": [
                5
            ],
            "user": [
                475
            ],
            "user_id": [
                491
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_constraint": {},
        "users_auth_logs_inc_input": {
            "id": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_insert_input": {
            "authMethodByAuthMethod": [
                76
            ],
            "auth_method": [
                70
            ],
            "authenticated_at": [
                412
            ],
            "customer": [
                225
            ],
            "customer_id": [
                490
            ],
            "id": [
                4
            ],
            "user": [
                483
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_max_fields": {
            "authenticated_at": [
                412
            ],
            "customer_id": [
                490
            ],
            "id": [
                4
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_max_order_by": {
            "authenticated_at": [
                284
            ],
            "customer_id": [
                284
            ],
            "id": [
                284
            ],
            "user_id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_min_fields": {
            "authenticated_at": [
                412
            ],
            "customer_id": [
                490
            ],
            "id": [
                4
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_min_order_by": {
            "authenticated_at": [
                284
            ],
            "customer_id": [
                284
            ],
            "id": [
                284
            ],
            "user_id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                439
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_on_conflict": {
            "constraint": [
                447
            ],
            "update_columns": [
                468
            ],
            "where": [
                446
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_order_by": {
            "authMethodByAuthMethod": [
                78
            ],
            "auth_method": [
                284
            ],
            "authenticated_at": [
                284
            ],
            "customer": [
                227
            ],
            "customer_id": [
                284
            ],
            "id": [
                284
            ],
            "user": [
                485
            ],
            "user_id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_pk_columns_input": {
            "id": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_select_column": {},
        "users_auth_logs_set_input": {
            "auth_method": [
                70
            ],
            "authenticated_at": [
                412
            ],
            "customer_id": [
                490
            ],
            "id": [
                4
            ],
            "user_id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_stddev_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_stddev_order_by": {
            "id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_stddev_pop_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_stddev_pop_order_by": {
            "id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_stddev_samp_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_stddev_samp_order_by": {
            "id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_sum_fields": {
            "id": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_sum_order_by": {
            "id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_update_column": {},
        "users_auth_logs_var_pop_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_var_pop_order_by": {
            "id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_var_samp_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_var_samp_order_by": {
            "id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_variance_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_variance_order_by": {
            "id": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "users_bool_exp": {
            "_and": [
                475
            ],
            "_not": [
                475
            ],
            "_or": [
                475
            ],
            "created_at": [
                413
            ],
            "customer_user_services": [
                144
            ],
            "customer_user_sub_services": [
                170
            ],
            "customer_users": [
                126
            ],
            "id": [
                491
            ],
            "phone": [
                11
            ],
            "role": [
                307
            ],
            "roleByRole": [
                304
            ],
            "token": [
                100
            ],
            "updated_at": [
                413
            ],
            "user_basic_data": [
                419
            ],
            "user_refresh_tokens": [
                86
            ],
            "users_auth_logs": [
                446
            ],
            "__typename": [
                10
            ]
        },
        "users_constraint": {},
        "users_insert_input": {
            "created_at": [
                412
            ],
            "customer_user_services": [
                143
            ],
            "customer_user_sub_services": [
                169
            ],
            "customer_users": [
                123
            ],
            "id": [
                490
            ],
            "phone": [
                10
            ],
            "role": [
                306
            ],
            "roleByRole": [
                312
            ],
            "token": [
                99
            ],
            "updated_at": [
                412
            ],
            "user_basic_data": [
                427
            ],
            "user_refresh_tokens": [
                92
            ],
            "users_auth_logs": [
                443
            ],
            "__typename": [
                10
            ]
        },
        "users_max_fields": {
            "created_at": [
                412
            ],
            "id": [
                490
            ],
            "phone": [
                10
            ],
            "token": [
                99
            ],
            "updated_at": [
                412
            ],
            "__typename": [
                10
            ]
        },
        "users_max_order_by": {
            "created_at": [
                284
            ],
            "id": [
                284
            ],
            "phone": [
                284
            ],
            "token": [
                284
            ],
            "updated_at": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "users_min_fields": {
            "created_at": [
                412
            ],
            "id": [
                490
            ],
            "phone": [
                10
            ],
            "token": [
                99
            ],
            "updated_at": [
                412
            ],
            "__typename": [
                10
            ]
        },
        "users_min_order_by": {
            "created_at": [
                284
            ],
            "id": [
                284
            ],
            "phone": [
                284
            ],
            "token": [
                284
            ],
            "updated_at": [
                284
            ],
            "__typename": [
                10
            ]
        },
        "users_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                434
            ],
            "__typename": [
                10
            ]
        },
        "users_obj_rel_insert_input": {
            "data": [
                477
            ],
            "on_conflict": [
                484
            ],
            "__typename": [
                10
            ]
        },
        "users_on_conflict": {
            "constraint": [
                476
            ],
            "update_columns": [
                489
            ],
            "where": [
                475
            ],
            "__typename": [
                10
            ]
        },
        "users_order_by": {
            "created_at": [
                284
            ],
            "customer_user_services_aggregate": [
                142
            ],
            "customer_user_sub_services_aggregate": [
                168
            ],
            "customer_users_aggregate": [
                122
            ],
            "id": [
                284
            ],
            "phone": [
                284
            ],
            "role": [
                284
            ],
            "roleByRole": [
                314
            ],
            "token": [
                284
            ],
            "updated_at": [
                284
            ],
            "user_basic_data": [
                429
            ],
            "user_refresh_tokens": [
                94
            ],
            "users_auth_logs_aggregate": [
                442
            ],
            "__typename": [
                10
            ]
        },
        "users_pk_columns_input": {
            "id": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "users_select_column": {},
        "users_set_input": {
            "created_at": [
                412
            ],
            "id": [
                490
            ],
            "phone": [
                10
            ],
            "role": [
                306
            ],
            "token": [
                99
            ],
            "updated_at": [
                412
            ],
            "__typename": [
                10
            ]
        },
        "users_update_column": {},
        "uuid": {},
        "uuid_comparison_exp": {
            "_eq": [
                490
            ],
            "_gt": [
                490
            ],
            "_gte": [
                490
            ],
            "_in": [
                490
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                490
            ],
            "_lte": [
                490
            ],
            "_neq": [
                490
            ],
            "_nin": [
                490
            ],
            "__typename": [
                10
            ]
        },
        "Query": {
            "admins": [
                13,
                {
                    "distinct_on": [
                        62,
                        "[admins_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        60,
                        "[admins_order_by!]"
                    ],
                    "where": [
                        52
                    ]
                }
            ],
            "admins_aggregate": [
                14,
                {
                    "distinct_on": [
                        62,
                        "[admins_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        60,
                        "[admins_order_by!]"
                    ],
                    "where": [
                        52
                    ]
                }
            ],
            "admins_auth_logs": [
                16,
                {
                    "distinct_on": [
                        35,
                        "[admins_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        33,
                        "[admins_auth_logs_order_by!]"
                    ],
                    "where": [
                        23
                    ]
                }
            ],
            "admins_auth_logs_aggregate": [
                17,
                {
                    "distinct_on": [
                        35,
                        "[admins_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        33,
                        "[admins_auth_logs_order_by!]"
                    ],
                    "where": [
                        23
                    ]
                }
            ],
            "admins_auth_logs_by_pk": [
                16,
                {
                    "id": [
                        4,
                        "Int!"
                    ]
                }
            ],
            "admins_by_pk": [
                13,
                {
                    "id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "auth_methods": [
                65,
                {
                    "distinct_on": [
                        80,
                        "[auth_methods_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        78,
                        "[auth_methods_order_by!]"
                    ],
                    "where": [
                        68
                    ]
                }
            ],
            "auth_methods_aggregate": [
                66,
                {
                    "distinct_on": [
                        80,
                        "[auth_methods_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        78,
                        "[auth_methods_order_by!]"
                    ],
                    "where": [
                        68
                    ]
                }
            ],
            "auth_methods_by_pk": [
                65,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "blacklist_refresh_token": [
                83,
                {
                    "distinct_on": [
                        96,
                        "[blacklist_refresh_token_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        94,
                        "[blacklist_refresh_token_order_by!]"
                    ],
                    "where": [
                        86
                    ]
                }
            ],
            "blacklist_refresh_token_aggregate": [
                84,
                {
                    "distinct_on": [
                        96,
                        "[blacklist_refresh_token_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        94,
                        "[blacklist_refresh_token_order_by!]"
                    ],
                    "where": [
                        86
                    ]
                }
            ],
            "blacklist_refresh_token_by_pk": [
                83,
                {
                    "sig": [
                        10,
                        "String!"
                    ]
                }
            ],
            "connectors": [
                101,
                {
                    "distinct_on": [
                        116,
                        "[connectors_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        114,
                        "[connectors_order_by!]"
                    ],
                    "where": [
                        104
                    ]
                }
            ],
            "connectors_aggregate": [
                102,
                {
                    "distinct_on": [
                        116,
                        "[connectors_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        114,
                        "[connectors_order_by!]"
                    ],
                    "where": [
                        104
                    ]
                }
            ],
            "connectors_by_pk": [
                101,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "customer_user": [
                119,
                {
                    "distinct_on": [
                        138,
                        "[customer_user_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        136,
                        "[customer_user_order_by!]"
                    ],
                    "where": [
                        126
                    ]
                }
            ],
            "customer_user_aggregate": [
                120,
                {
                    "distinct_on": [
                        138,
                        "[customer_user_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        136,
                        "[customer_user_order_by!]"
                    ],
                    "where": [
                        126
                    ]
                }
            ],
            "customer_user_by_pk": [
                119,
                {
                    "customer_id": [
                        490,
                        "uuid!"
                    ],
                    "user_id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "customer_user_service": [
                139,
                {
                    "distinct_on": [
                        155,
                        "[customer_user_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        153,
                        "[customer_user_service_order_by!]"
                    ],
                    "where": [
                        144
                    ]
                }
            ],
            "customer_user_service_aggregate": [
                140,
                {
                    "distinct_on": [
                        155,
                        "[customer_user_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        153,
                        "[customer_user_service_order_by!]"
                    ],
                    "where": [
                        144
                    ]
                }
            ],
            "customer_user_service_by_pk": [
                139,
                {
                    "customer_id": [
                        490,
                        "uuid!"
                    ],
                    "service": [
                        324,
                        "services_enum!"
                    ],
                    "user_id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "customer_user_sub_service": [
                165,
                {
                    "distinct_on": [
                        181,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        179,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        170
                    ]
                }
            ],
            "customer_user_sub_service_aggregate": [
                166,
                {
                    "distinct_on": [
                        181,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        179,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        170
                    ]
                }
            ],
            "customer_user_sub_service_by_pk": [
                165,
                {
                    "customer_id": [
                        490,
                        "uuid!"
                    ],
                    "service": [
                        324,
                        "services_enum!"
                    ],
                    "sub_service": [
                        10,
                        "String!"
                    ],
                    "user_id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "customers": [
                193,
                {
                    "distinct_on": [
                        229,
                        "[customers_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        227,
                        "[customers_order_by!]"
                    ],
                    "where": [
                        200
                    ]
                }
            ],
            "customers_aggregate": [
                194,
                {
                    "distinct_on": [
                        229,
                        "[customers_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        227,
                        "[customers_order_by!]"
                    ],
                    "where": [
                        200
                    ]
                }
            ],
            "customers_by_pk": [
                193,
                {
                    "id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "customers_contact": [
                202,
                {
                    "distinct_on": [
                        215,
                        "[customers_contact_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        213,
                        "[customers_contact_order_by!]"
                    ],
                    "where": [
                        205
                    ]
                }
            ],
            "customers_contact_aggregate": [
                203,
                {
                    "distinct_on": [
                        215,
                        "[customers_contact_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        213,
                        "[customers_contact_order_by!]"
                    ],
                    "where": [
                        205
                    ]
                }
            ],
            "customers_contact_by_pk": [
                202,
                {
                    "customer_id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "feature_names": [
                246,
                {
                    "distinct_on": [
                        261,
                        "[feature_names_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        259,
                        "[feature_names_order_by!]"
                    ],
                    "where": [
                        249
                    ]
                }
            ],
            "feature_names_aggregate": [
                247,
                {
                    "distinct_on": [
                        261,
                        "[feature_names_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        259,
                        "[feature_names_order_by!]"
                    ],
                    "where": [
                        249
                    ]
                }
            ],
            "feature_names_by_pk": [
                246,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "features": [
                264,
                {
                    "distinct_on": [
                        280,
                        "[features_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        278,
                        "[features_order_by!]"
                    ],
                    "where": [
                        269
                    ]
                }
            ],
            "features_aggregate": [
                265,
                {
                    "distinct_on": [
                        280,
                        "[features_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        278,
                        "[features_order_by!]"
                    ],
                    "where": [
                        269
                    ]
                }
            ],
            "features_by_pk": [
                264,
                {
                    "customer_id": [
                        490,
                        "uuid!"
                    ],
                    "name": [
                        251,
                        "feature_names_enum!"
                    ]
                }
            ],
            "getCustomerById": [
                283,
                {
                    "id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "getCustomersAndCountUsers": [
                283
            ],
            "partners": [
                285,
                {
                    "distinct_on": [
                        298,
                        "[partners_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        296,
                        "[partners_order_by!]"
                    ],
                    "where": [
                        288
                    ]
                }
            ],
            "partners_aggregate": [
                286,
                {
                    "distinct_on": [
                        298,
                        "[partners_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        296,
                        "[partners_order_by!]"
                    ],
                    "where": [
                        288
                    ]
                }
            ],
            "partners_by_pk": [
                285,
                {
                    "id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "roles": [
                301,
                {
                    "distinct_on": [
                        316,
                        "[roles_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        314,
                        "[roles_order_by!]"
                    ],
                    "where": [
                        304
                    ]
                }
            ],
            "roles_aggregate": [
                302,
                {
                    "distinct_on": [
                        316,
                        "[roles_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        314,
                        "[roles_order_by!]"
                    ],
                    "where": [
                        304
                    ]
                }
            ],
            "roles_by_pk": [
                301,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "services": [
                319,
                {
                    "distinct_on": [
                        334,
                        "[services_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        332,
                        "[services_order_by!]"
                    ],
                    "where": [
                        322
                    ]
                }
            ],
            "services_aggregate": [
                320,
                {
                    "distinct_on": [
                        334,
                        "[services_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        332,
                        "[services_order_by!]"
                    ],
                    "where": [
                        322
                    ]
                }
            ],
            "services_by_pk": [
                319,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "srv_names": [
                337,
                {
                    "distinct_on": [
                        352,
                        "[srv_names_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        350,
                        "[srv_names_order_by!]"
                    ],
                    "where": [
                        340
                    ]
                }
            ],
            "srv_names_aggregate": [
                338,
                {
                    "distinct_on": [
                        352,
                        "[srv_names_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        350,
                        "[srv_names_order_by!]"
                    ],
                    "where": [
                        340
                    ]
                }
            ],
            "srv_names_by_pk": [
                337,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "srv_urls": [
                355,
                {
                    "distinct_on": [
                        371,
                        "[srv_urls_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        369,
                        "[srv_urls_order_by!]"
                    ],
                    "where": [
                        360
                    ]
                }
            ],
            "srv_urls_aggregate": [
                356,
                {
                    "distinct_on": [
                        371,
                        "[srv_urls_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        369,
                        "[srv_urls_order_by!]"
                    ],
                    "where": [
                        360
                    ]
                }
            ],
            "srv_urls_by_pk": [
                355,
                {
                    "customer_id": [
                        490,
                        "uuid!"
                    ],
                    "name": [
                        342,
                        "srv_names_enum!"
                    ]
                }
            ],
            "status": [
                374,
                {
                    "distinct_on": [
                        389,
                        "[status_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        387,
                        "[status_order_by!]"
                    ],
                    "where": [
                        377
                    ]
                }
            ],
            "status_aggregate": [
                375,
                {
                    "distinct_on": [
                        389,
                        "[status_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        387,
                        "[status_order_by!]"
                    ],
                    "where": [
                        377
                    ]
                }
            ],
            "status_by_pk": [
                374,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "sub_services": [
                392,
                {
                    "distinct_on": [
                        409,
                        "[sub_services_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        407,
                        "[sub_services_order_by!]"
                    ],
                    "where": [
                        397
                    ]
                }
            ],
            "sub_services_aggregate": [
                393,
                {
                    "distinct_on": [
                        409,
                        "[sub_services_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        407,
                        "[sub_services_order_by!]"
                    ],
                    "where": [
                        397
                    ]
                }
            ],
            "sub_services_by_pk": [
                392,
                {
                    "name": [
                        10,
                        "String!"
                    ],
                    "service": [
                        324,
                        "services_enum!"
                    ]
                }
            ],
            "user_basic_data": [
                414,
                {
                    "distinct_on": [
                        431,
                        "[user_basic_data_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        429,
                        "[user_basic_data_order_by!]"
                    ],
                    "where": [
                        419
                    ]
                }
            ],
            "user_basic_data_aggregate": [
                415,
                {
                    "distinct_on": [
                        431,
                        "[user_basic_data_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        429,
                        "[user_basic_data_order_by!]"
                    ],
                    "where": [
                        419
                    ]
                }
            ],
            "user_basic_data_by_pk": [
                414,
                {
                    "user_id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "users": [
                434,
                {
                    "distinct_on": [
                        487,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        485,
                        "[users_order_by!]"
                    ],
                    "where": [
                        475
                    ]
                }
            ],
            "users_aggregate": [
                435,
                {
                    "distinct_on": [
                        487,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        485,
                        "[users_order_by!]"
                    ],
                    "where": [
                        475
                    ]
                }
            ],
            "users_auth_logs": [
                439,
                {
                    "distinct_on": [
                        458,
                        "[users_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        456,
                        "[users_auth_logs_order_by!]"
                    ],
                    "where": [
                        446
                    ]
                }
            ],
            "users_auth_logs_aggregate": [
                440,
                {
                    "distinct_on": [
                        458,
                        "[users_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        456,
                        "[users_auth_logs_order_by!]"
                    ],
                    "where": [
                        446
                    ]
                }
            ],
            "users_auth_logs_by_pk": [
                439,
                {
                    "id": [
                        4,
                        "Int!"
                    ]
                }
            ],
            "users_by_pk": [
                434,
                {
                    "id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "__typename": [
                10
            ]
        },
        "Mutation": {
            "delete_admins": [
                57,
                {
                    "where": [
                        52,
                        "admins_bool_exp!"
                    ]
                }
            ],
            "delete_admins_auth_logs": [
                31,
                {
                    "where": [
                        23,
                        "admins_auth_logs_bool_exp!"
                    ]
                }
            ],
            "delete_admins_auth_logs_by_pk": [
                16,
                {
                    "id": [
                        4,
                        "Int!"
                    ]
                }
            ],
            "delete_admins_by_pk": [
                13,
                {
                    "id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "delete_auth_methods": [
                75,
                {
                    "where": [
                        68,
                        "auth_methods_bool_exp!"
                    ]
                }
            ],
            "delete_auth_methods_by_pk": [
                65,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "delete_blacklist_refresh_token": [
                91,
                {
                    "where": [
                        86,
                        "blacklist_refresh_token_bool_exp!"
                    ]
                }
            ],
            "delete_blacklist_refresh_token_by_pk": [
                83,
                {
                    "sig": [
                        10,
                        "String!"
                    ]
                }
            ],
            "delete_connectors": [
                111,
                {
                    "where": [
                        104,
                        "connectors_bool_exp!"
                    ]
                }
            ],
            "delete_connectors_by_pk": [
                101,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "delete_customer_user": [
                134,
                {
                    "where": [
                        126,
                        "customer_user_bool_exp!"
                    ]
                }
            ],
            "delete_customer_user_by_pk": [
                119,
                {
                    "customer_id": [
                        490,
                        "uuid!"
                    ],
                    "user_id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "delete_customer_user_service": [
                151,
                {
                    "where": [
                        144,
                        "customer_user_service_bool_exp!"
                    ]
                }
            ],
            "delete_customer_user_service_by_pk": [
                139,
                {
                    "customer_id": [
                        490,
                        "uuid!"
                    ],
                    "service": [
                        324,
                        "services_enum!"
                    ],
                    "user_id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "delete_customer_user_sub_service": [
                177,
                {
                    "where": [
                        170,
                        "customer_user_sub_service_bool_exp!"
                    ]
                }
            ],
            "delete_customer_user_sub_service_by_pk": [
                165,
                {
                    "customer_id": [
                        490,
                        "uuid!"
                    ],
                    "service": [
                        324,
                        "services_enum!"
                    ],
                    "sub_service": [
                        10,
                        "String!"
                    ],
                    "user_id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "delete_customers": [
                224,
                {
                    "where": [
                        200,
                        "customers_bool_exp!"
                    ]
                }
            ],
            "delete_customers_by_pk": [
                193,
                {
                    "id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "delete_customers_contact": [
                210,
                {
                    "where": [
                        205,
                        "customers_contact_bool_exp!"
                    ]
                }
            ],
            "delete_customers_contact_by_pk": [
                202,
                {
                    "customer_id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "delete_feature_names": [
                256,
                {
                    "where": [
                        249,
                        "feature_names_bool_exp!"
                    ]
                }
            ],
            "delete_feature_names_by_pk": [
                246,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "delete_features": [
                276,
                {
                    "where": [
                        269,
                        "features_bool_exp!"
                    ]
                }
            ],
            "delete_features_by_pk": [
                264,
                {
                    "customer_id": [
                        490,
                        "uuid!"
                    ],
                    "name": [
                        251,
                        "feature_names_enum!"
                    ]
                }
            ],
            "delete_partners": [
                293,
                {
                    "where": [
                        288,
                        "partners_bool_exp!"
                    ]
                }
            ],
            "delete_partners_by_pk": [
                285,
                {
                    "id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "delete_roles": [
                311,
                {
                    "where": [
                        304,
                        "roles_bool_exp!"
                    ]
                }
            ],
            "delete_roles_by_pk": [
                301,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "delete_services": [
                329,
                {
                    "where": [
                        322,
                        "services_bool_exp!"
                    ]
                }
            ],
            "delete_services_by_pk": [
                319,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "delete_srv_names": [
                347,
                {
                    "where": [
                        340,
                        "srv_names_bool_exp!"
                    ]
                }
            ],
            "delete_srv_names_by_pk": [
                337,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "delete_srv_urls": [
                367,
                {
                    "where": [
                        360,
                        "srv_urls_bool_exp!"
                    ]
                }
            ],
            "delete_srv_urls_by_pk": [
                355,
                {
                    "customer_id": [
                        490,
                        "uuid!"
                    ],
                    "name": [
                        342,
                        "srv_names_enum!"
                    ]
                }
            ],
            "delete_status": [
                384,
                {
                    "where": [
                        377,
                        "status_bool_exp!"
                    ]
                }
            ],
            "delete_status_by_pk": [
                374,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "delete_sub_services": [
                404,
                {
                    "where": [
                        397,
                        "sub_services_bool_exp!"
                    ]
                }
            ],
            "delete_sub_services_by_pk": [
                392,
                {
                    "name": [
                        10,
                        "String!"
                    ],
                    "service": [
                        324,
                        "services_enum!"
                    ]
                }
            ],
            "delete_user_basic_data": [
                426,
                {
                    "where": [
                        419,
                        "user_basic_data_bool_exp!"
                    ]
                }
            ],
            "delete_user_basic_data_by_pk": [
                414,
                {
                    "user_id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "delete_users": [
                482,
                {
                    "where": [
                        475,
                        "users_bool_exp!"
                    ]
                }
            ],
            "delete_users_auth_logs": [
                454,
                {
                    "where": [
                        446,
                        "users_auth_logs_bool_exp!"
                    ]
                }
            ],
            "delete_users_auth_logs_by_pk": [
                439,
                {
                    "id": [
                        4,
                        "Int!"
                    ]
                }
            ],
            "delete_users_by_pk": [
                434,
                {
                    "id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "insertAdmin": [
                6,
                {
                    "email": [
                        99,
                        "bpchar!"
                    ],
                    "name": [
                        99,
                        "bpchar!"
                    ],
                    "password": [
                        99,
                        "bpchar!"
                    ],
                    "phone": [
                        10,
                        "String!"
                    ]
                }
            ],
            "insertCustomer": [
                283,
                {
                    "conn_string": [
                        10,
                        "String!"
                    ],
                    "connector": [
                        10
                    ],
                    "contact_email": [
                        10
                    ],
                    "contact_message": [
                        10
                    ],
                    "contact_tel": [
                        10
                    ],
                    "name": [
                        10,
                        "String!"
                    ],
                    "refresh_token_validity": [
                        4,
                        "Int!"
                    ]
                }
            ],
            "insertUserOrWarnIfExists": [
                3,
                {
                    "brukerBrukerNavn": [
                        10
                    ],
                    "brukerRegion": [
                        4
                    ],
                    "customer_id": [
                        490
                    ],
                    "email": [
                        10,
                        "String!"
                    ],
                    "name": [
                        10,
                        "String!"
                    ],
                    "password": [
                        10,
                        "String!"
                    ],
                    "phone": [
                        10,
                        "String!"
                    ],
                    "role": [
                        10
                    ],
                    "token": [
                        10
                    ]
                }
            ],
            "insertUsersOrWarnIfExists": [
                3,
                {
                    "objects": [
                        2,
                        "[InsertUserData!]"
                    ]
                }
            ],
            "insert_admins": [
                57,
                {
                    "objects": [
                        54,
                        "[admins_insert_input!]!"
                    ],
                    "on_conflict": [
                        59
                    ]
                }
            ],
            "insert_admins_auth_logs": [
                31,
                {
                    "objects": [
                        26,
                        "[admins_auth_logs_insert_input!]!"
                    ],
                    "on_conflict": [
                        32
                    ]
                }
            ],
            "insert_admins_auth_logs_one": [
                16,
                {
                    "object": [
                        26,
                        "admins_auth_logs_insert_input!"
                    ],
                    "on_conflict": [
                        32
                    ]
                }
            ],
            "insert_admins_one": [
                13,
                {
                    "object": [
                        54,
                        "admins_insert_input!"
                    ],
                    "on_conflict": [
                        59
                    ]
                }
            ],
            "insert_auth_methods": [
                75,
                {
                    "objects": [
                        72,
                        "[auth_methods_insert_input!]!"
                    ],
                    "on_conflict": [
                        77
                    ]
                }
            ],
            "insert_auth_methods_one": [
                65,
                {
                    "object": [
                        72,
                        "auth_methods_insert_input!"
                    ],
                    "on_conflict": [
                        77
                    ]
                }
            ],
            "insert_blacklist_refresh_token": [
                91,
                {
                    "objects": [
                        88,
                        "[blacklist_refresh_token_insert_input!]!"
                    ],
                    "on_conflict": [
                        93
                    ]
                }
            ],
            "insert_blacklist_refresh_token_one": [
                83,
                {
                    "object": [
                        88,
                        "blacklist_refresh_token_insert_input!"
                    ],
                    "on_conflict": [
                        93
                    ]
                }
            ],
            "insert_connectors": [
                111,
                {
                    "objects": [
                        108,
                        "[connectors_insert_input!]!"
                    ],
                    "on_conflict": [
                        113
                    ]
                }
            ],
            "insert_connectors_one": [
                101,
                {
                    "object": [
                        108,
                        "connectors_insert_input!"
                    ],
                    "on_conflict": [
                        113
                    ]
                }
            ],
            "insert_customer_user": [
                134,
                {
                    "objects": [
                        129,
                        "[customer_user_insert_input!]!"
                    ],
                    "on_conflict": [
                        135
                    ]
                }
            ],
            "insert_customer_user_one": [
                119,
                {
                    "object": [
                        129,
                        "customer_user_insert_input!"
                    ],
                    "on_conflict": [
                        135
                    ]
                }
            ],
            "insert_customer_user_service": [
                151,
                {
                    "objects": [
                        146,
                        "[customer_user_service_insert_input!]!"
                    ],
                    "on_conflict": [
                        152
                    ]
                }
            ],
            "insert_customer_user_service_one": [
                139,
                {
                    "object": [
                        146,
                        "customer_user_service_insert_input!"
                    ],
                    "on_conflict": [
                        152
                    ]
                }
            ],
            "insert_customer_user_sub_service": [
                177,
                {
                    "objects": [
                        172,
                        "[customer_user_sub_service_insert_input!]!"
                    ],
                    "on_conflict": [
                        178
                    ]
                }
            ],
            "insert_customer_user_sub_service_one": [
                165,
                {
                    "object": [
                        172,
                        "customer_user_sub_service_insert_input!"
                    ],
                    "on_conflict": [
                        178
                    ]
                }
            ],
            "insert_customers": [
                224,
                {
                    "objects": [
                        219,
                        "[customers_insert_input!]!"
                    ],
                    "on_conflict": [
                        226
                    ]
                }
            ],
            "insert_customers_contact": [
                210,
                {
                    "objects": [
                        207,
                        "[customers_contact_insert_input!]!"
                    ],
                    "on_conflict": [
                        212
                    ]
                }
            ],
            "insert_customers_contact_one": [
                202,
                {
                    "object": [
                        207,
                        "customers_contact_insert_input!"
                    ],
                    "on_conflict": [
                        212
                    ]
                }
            ],
            "insert_customers_one": [
                193,
                {
                    "object": [
                        219,
                        "customers_insert_input!"
                    ],
                    "on_conflict": [
                        226
                    ]
                }
            ],
            "insert_feature_names": [
                256,
                {
                    "objects": [
                        253,
                        "[feature_names_insert_input!]!"
                    ],
                    "on_conflict": [
                        258
                    ]
                }
            ],
            "insert_feature_names_one": [
                246,
                {
                    "object": [
                        253,
                        "feature_names_insert_input!"
                    ],
                    "on_conflict": [
                        258
                    ]
                }
            ],
            "insert_features": [
                276,
                {
                    "objects": [
                        271,
                        "[features_insert_input!]!"
                    ],
                    "on_conflict": [
                        277
                    ]
                }
            ],
            "insert_features_one": [
                264,
                {
                    "object": [
                        271,
                        "features_insert_input!"
                    ],
                    "on_conflict": [
                        277
                    ]
                }
            ],
            "insert_partners": [
                293,
                {
                    "objects": [
                        290,
                        "[partners_insert_input!]!"
                    ],
                    "on_conflict": [
                        295
                    ]
                }
            ],
            "insert_partners_one": [
                285,
                {
                    "object": [
                        290,
                        "partners_insert_input!"
                    ],
                    "on_conflict": [
                        295
                    ]
                }
            ],
            "insert_roles": [
                311,
                {
                    "objects": [
                        308,
                        "[roles_insert_input!]!"
                    ],
                    "on_conflict": [
                        313
                    ]
                }
            ],
            "insert_roles_one": [
                301,
                {
                    "object": [
                        308,
                        "roles_insert_input!"
                    ],
                    "on_conflict": [
                        313
                    ]
                }
            ],
            "insert_services": [
                329,
                {
                    "objects": [
                        326,
                        "[services_insert_input!]!"
                    ],
                    "on_conflict": [
                        331
                    ]
                }
            ],
            "insert_services_one": [
                319,
                {
                    "object": [
                        326,
                        "services_insert_input!"
                    ],
                    "on_conflict": [
                        331
                    ]
                }
            ],
            "insert_srv_names": [
                347,
                {
                    "objects": [
                        344,
                        "[srv_names_insert_input!]!"
                    ],
                    "on_conflict": [
                        349
                    ]
                }
            ],
            "insert_srv_names_one": [
                337,
                {
                    "object": [
                        344,
                        "srv_names_insert_input!"
                    ],
                    "on_conflict": [
                        349
                    ]
                }
            ],
            "insert_srv_urls": [
                367,
                {
                    "objects": [
                        362,
                        "[srv_urls_insert_input!]!"
                    ],
                    "on_conflict": [
                        368
                    ]
                }
            ],
            "insert_srv_urls_one": [
                355,
                {
                    "object": [
                        362,
                        "srv_urls_insert_input!"
                    ],
                    "on_conflict": [
                        368
                    ]
                }
            ],
            "insert_status": [
                384,
                {
                    "objects": [
                        381,
                        "[status_insert_input!]!"
                    ],
                    "on_conflict": [
                        386
                    ]
                }
            ],
            "insert_status_one": [
                374,
                {
                    "object": [
                        381,
                        "status_insert_input!"
                    ],
                    "on_conflict": [
                        386
                    ]
                }
            ],
            "insert_sub_services": [
                404,
                {
                    "objects": [
                        399,
                        "[sub_services_insert_input!]!"
                    ],
                    "on_conflict": [
                        406
                    ]
                }
            ],
            "insert_sub_services_one": [
                392,
                {
                    "object": [
                        399,
                        "sub_services_insert_input!"
                    ],
                    "on_conflict": [
                        406
                    ]
                }
            ],
            "insert_user_basic_data": [
                426,
                {
                    "objects": [
                        421,
                        "[user_basic_data_insert_input!]!"
                    ],
                    "on_conflict": [
                        428
                    ]
                }
            ],
            "insert_user_basic_data_one": [
                414,
                {
                    "object": [
                        421,
                        "user_basic_data_insert_input!"
                    ],
                    "on_conflict": [
                        428
                    ]
                }
            ],
            "insert_users": [
                482,
                {
                    "objects": [
                        477,
                        "[users_insert_input!]!"
                    ],
                    "on_conflict": [
                        484
                    ]
                }
            ],
            "insert_users_auth_logs": [
                454,
                {
                    "objects": [
                        449,
                        "[users_auth_logs_insert_input!]!"
                    ],
                    "on_conflict": [
                        455
                    ]
                }
            ],
            "insert_users_auth_logs_one": [
                439,
                {
                    "object": [
                        449,
                        "users_auth_logs_insert_input!"
                    ],
                    "on_conflict": [
                        455
                    ]
                }
            ],
            "insert_users_one": [
                434,
                {
                    "object": [
                        477,
                        "users_insert_input!"
                    ],
                    "on_conflict": [
                        484
                    ]
                }
            ],
            "signin": [
                8,
                {
                    "customer_name": [
                        10,
                        "String!"
                    ],
                    "email": [
                        10,
                        "String!"
                    ],
                    "password": [
                        10,
                        "String!"
                    ]
                }
            ],
            "singinAvansAdmin": [
                9,
                {
                    "email": [
                        10,
                        "String!"
                    ],
                    "password": [
                        10,
                        "String!"
                    ]
                }
            ],
            "singinAvansAdminByRefreshToken": [
                9,
                {
                    "id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "updateAdmin": [
                6,
                {
                    "email": [
                        99,
                        "bpchar!"
                    ],
                    "id": [
                        490,
                        "uuid!"
                    ],
                    "name": [
                        99,
                        "bpchar!"
                    ],
                    "password": [
                        99,
                        "bpchar!"
                    ],
                    "phone": [
                        10,
                        "String!"
                    ]
                }
            ],
            "updateCustomer": [
                7,
                {
                    "conn_string": [
                        10
                    ],
                    "connector": [
                        10,
                        "String!"
                    ],
                    "contact_email": [
                        10
                    ],
                    "contact_message": [
                        10
                    ],
                    "contact_tel": [
                        10
                    ],
                    "id": [
                        490,
                        "uuid!"
                    ],
                    "name": [
                        10,
                        "String!"
                    ],
                    "refresh_token_validity": [
                        4,
                        "Int!"
                    ]
                }
            ],
            "updateUser": [
                12,
                {
                    "email": [
                        99
                    ],
                    "id": [
                        490,
                        "uuid!"
                    ],
                    "name": [
                        99
                    ],
                    "password": [
                        99
                    ],
                    "phone": [
                        10
                    ],
                    "role": [
                        10
                    ]
                }
            ],
            "update_admins": [
                57,
                {
                    "_set": [
                        63
                    ],
                    "where": [
                        52,
                        "admins_bool_exp!"
                    ]
                }
            ],
            "update_admins_auth_logs": [
                31,
                {
                    "_inc": [
                        25
                    ],
                    "_set": [
                        36
                    ],
                    "where": [
                        23,
                        "admins_auth_logs_bool_exp!"
                    ]
                }
            ],
            "update_admins_auth_logs_by_pk": [
                16,
                {
                    "_inc": [
                        25
                    ],
                    "_set": [
                        36
                    ],
                    "pk_columns": [
                        34,
                        "admins_auth_logs_pk_columns_input!"
                    ]
                }
            ],
            "update_admins_by_pk": [
                13,
                {
                    "_set": [
                        63
                    ],
                    "pk_columns": [
                        61,
                        "admins_pk_columns_input!"
                    ]
                }
            ],
            "update_auth_methods": [
                75,
                {
                    "_set": [
                        81
                    ],
                    "where": [
                        68,
                        "auth_methods_bool_exp!"
                    ]
                }
            ],
            "update_auth_methods_by_pk": [
                65,
                {
                    "_set": [
                        81
                    ],
                    "pk_columns": [
                        79,
                        "auth_methods_pk_columns_input!"
                    ]
                }
            ],
            "update_blacklist_refresh_token": [
                91,
                {
                    "_set": [
                        97
                    ],
                    "where": [
                        86,
                        "blacklist_refresh_token_bool_exp!"
                    ]
                }
            ],
            "update_blacklist_refresh_token_by_pk": [
                83,
                {
                    "_set": [
                        97
                    ],
                    "pk_columns": [
                        95,
                        "blacklist_refresh_token_pk_columns_input!"
                    ]
                }
            ],
            "update_connectors": [
                111,
                {
                    "_set": [
                        117
                    ],
                    "where": [
                        104,
                        "connectors_bool_exp!"
                    ]
                }
            ],
            "update_connectors_by_pk": [
                101,
                {
                    "_set": [
                        117
                    ],
                    "pk_columns": [
                        115,
                        "connectors_pk_columns_input!"
                    ]
                }
            ],
            "update_customer_user": [
                134,
                {
                    "_inc": [
                        128
                    ],
                    "_set": [
                        158
                    ],
                    "where": [
                        126,
                        "customer_user_bool_exp!"
                    ]
                }
            ],
            "update_customer_user_by_pk": [
                119,
                {
                    "_inc": [
                        128
                    ],
                    "_set": [
                        158
                    ],
                    "pk_columns": [
                        137,
                        "customer_user_pk_columns_input!"
                    ]
                }
            ],
            "update_customer_user_service": [
                151,
                {
                    "_set": [
                        156
                    ],
                    "where": [
                        144,
                        "customer_user_service_bool_exp!"
                    ]
                }
            ],
            "update_customer_user_service_by_pk": [
                139,
                {
                    "_set": [
                        156
                    ],
                    "pk_columns": [
                        154,
                        "customer_user_service_pk_columns_input!"
                    ]
                }
            ],
            "update_customer_user_sub_service": [
                177,
                {
                    "_set": [
                        182
                    ],
                    "where": [
                        170,
                        "customer_user_sub_service_bool_exp!"
                    ]
                }
            ],
            "update_customer_user_sub_service_by_pk": [
                165,
                {
                    "_set": [
                        182
                    ],
                    "pk_columns": [
                        180,
                        "customer_user_sub_service_pk_columns_input!"
                    ]
                }
            ],
            "update_customers": [
                224,
                {
                    "_inc": [
                        218
                    ],
                    "_set": [
                        230
                    ],
                    "where": [
                        200,
                        "customers_bool_exp!"
                    ]
                }
            ],
            "update_customers_by_pk": [
                193,
                {
                    "_inc": [
                        218
                    ],
                    "_set": [
                        230
                    ],
                    "pk_columns": [
                        228,
                        "customers_pk_columns_input!"
                    ]
                }
            ],
            "update_customers_contact": [
                210,
                {
                    "_set": [
                        216
                    ],
                    "where": [
                        205,
                        "customers_contact_bool_exp!"
                    ]
                }
            ],
            "update_customers_contact_by_pk": [
                202,
                {
                    "_set": [
                        216
                    ],
                    "pk_columns": [
                        214,
                        "customers_contact_pk_columns_input!"
                    ]
                }
            ],
            "update_feature_names": [
                256,
                {
                    "_set": [
                        262
                    ],
                    "where": [
                        249,
                        "feature_names_bool_exp!"
                    ]
                }
            ],
            "update_feature_names_by_pk": [
                246,
                {
                    "_set": [
                        262
                    ],
                    "pk_columns": [
                        260,
                        "feature_names_pk_columns_input!"
                    ]
                }
            ],
            "update_features": [
                276,
                {
                    "_set": [
                        281
                    ],
                    "where": [
                        269,
                        "features_bool_exp!"
                    ]
                }
            ],
            "update_features_by_pk": [
                264,
                {
                    "_set": [
                        281
                    ],
                    "pk_columns": [
                        279,
                        "features_pk_columns_input!"
                    ]
                }
            ],
            "update_partners": [
                293,
                {
                    "_set": [
                        299
                    ],
                    "where": [
                        288,
                        "partners_bool_exp!"
                    ]
                }
            ],
            "update_partners_by_pk": [
                285,
                {
                    "_set": [
                        299
                    ],
                    "pk_columns": [
                        297,
                        "partners_pk_columns_input!"
                    ]
                }
            ],
            "update_roles": [
                311,
                {
                    "_set": [
                        317
                    ],
                    "where": [
                        304,
                        "roles_bool_exp!"
                    ]
                }
            ],
            "update_roles_by_pk": [
                301,
                {
                    "_set": [
                        317
                    ],
                    "pk_columns": [
                        315,
                        "roles_pk_columns_input!"
                    ]
                }
            ],
            "update_services": [
                329,
                {
                    "_set": [
                        335
                    ],
                    "where": [
                        322,
                        "services_bool_exp!"
                    ]
                }
            ],
            "update_services_by_pk": [
                319,
                {
                    "_set": [
                        335
                    ],
                    "pk_columns": [
                        333,
                        "services_pk_columns_input!"
                    ]
                }
            ],
            "update_srv_names": [
                347,
                {
                    "_set": [
                        353
                    ],
                    "where": [
                        340,
                        "srv_names_bool_exp!"
                    ]
                }
            ],
            "update_srv_names_by_pk": [
                337,
                {
                    "_set": [
                        353
                    ],
                    "pk_columns": [
                        351,
                        "srv_names_pk_columns_input!"
                    ]
                }
            ],
            "update_srv_urls": [
                367,
                {
                    "_set": [
                        372
                    ],
                    "where": [
                        360,
                        "srv_urls_bool_exp!"
                    ]
                }
            ],
            "update_srv_urls_by_pk": [
                355,
                {
                    "_set": [
                        372
                    ],
                    "pk_columns": [
                        370,
                        "srv_urls_pk_columns_input!"
                    ]
                }
            ],
            "update_status": [
                384,
                {
                    "_set": [
                        390
                    ],
                    "where": [
                        377,
                        "status_bool_exp!"
                    ]
                }
            ],
            "update_status_by_pk": [
                374,
                {
                    "_set": [
                        390
                    ],
                    "pk_columns": [
                        388,
                        "status_pk_columns_input!"
                    ]
                }
            ],
            "update_sub_services": [
                404,
                {
                    "_set": [
                        410
                    ],
                    "where": [
                        397,
                        "sub_services_bool_exp!"
                    ]
                }
            ],
            "update_sub_services_by_pk": [
                392,
                {
                    "_set": [
                        410
                    ],
                    "pk_columns": [
                        408,
                        "sub_services_pk_columns_input!"
                    ]
                }
            ],
            "update_user_basic_data": [
                426,
                {
                    "_set": [
                        432
                    ],
                    "where": [
                        419,
                        "user_basic_data_bool_exp!"
                    ]
                }
            ],
            "update_user_basic_data_by_pk": [
                414,
                {
                    "_set": [
                        432
                    ],
                    "pk_columns": [
                        430,
                        "user_basic_data_pk_columns_input!"
                    ]
                }
            ],
            "update_users": [
                482,
                {
                    "_set": [
                        488
                    ],
                    "where": [
                        475,
                        "users_bool_exp!"
                    ]
                }
            ],
            "update_users_auth_logs": [
                454,
                {
                    "_inc": [
                        448
                    ],
                    "_set": [
                        459
                    ],
                    "where": [
                        446,
                        "users_auth_logs_bool_exp!"
                    ]
                }
            ],
            "update_users_auth_logs_by_pk": [
                439,
                {
                    "_inc": [
                        448
                    ],
                    "_set": [
                        459
                    ],
                    "pk_columns": [
                        457,
                        "users_auth_logs_pk_columns_input!"
                    ]
                }
            ],
            "update_users_by_pk": [
                434,
                {
                    "_set": [
                        488
                    ],
                    "pk_columns": [
                        486,
                        "users_pk_columns_input!"
                    ]
                }
            ],
            "__typename": [
                10
            ]
        },
        "Subscription": {
            "admins": [
                13,
                {
                    "distinct_on": [
                        62,
                        "[admins_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        60,
                        "[admins_order_by!]"
                    ],
                    "where": [
                        52
                    ]
                }
            ],
            "admins_aggregate": [
                14,
                {
                    "distinct_on": [
                        62,
                        "[admins_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        60,
                        "[admins_order_by!]"
                    ],
                    "where": [
                        52
                    ]
                }
            ],
            "admins_auth_logs": [
                16,
                {
                    "distinct_on": [
                        35,
                        "[admins_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        33,
                        "[admins_auth_logs_order_by!]"
                    ],
                    "where": [
                        23
                    ]
                }
            ],
            "admins_auth_logs_aggregate": [
                17,
                {
                    "distinct_on": [
                        35,
                        "[admins_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        33,
                        "[admins_auth_logs_order_by!]"
                    ],
                    "where": [
                        23
                    ]
                }
            ],
            "admins_auth_logs_by_pk": [
                16,
                {
                    "id": [
                        4,
                        "Int!"
                    ]
                }
            ],
            "admins_by_pk": [
                13,
                {
                    "id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "auth_methods": [
                65,
                {
                    "distinct_on": [
                        80,
                        "[auth_methods_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        78,
                        "[auth_methods_order_by!]"
                    ],
                    "where": [
                        68
                    ]
                }
            ],
            "auth_methods_aggregate": [
                66,
                {
                    "distinct_on": [
                        80,
                        "[auth_methods_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        78,
                        "[auth_methods_order_by!]"
                    ],
                    "where": [
                        68
                    ]
                }
            ],
            "auth_methods_by_pk": [
                65,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "blacklist_refresh_token": [
                83,
                {
                    "distinct_on": [
                        96,
                        "[blacklist_refresh_token_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        94,
                        "[blacklist_refresh_token_order_by!]"
                    ],
                    "where": [
                        86
                    ]
                }
            ],
            "blacklist_refresh_token_aggregate": [
                84,
                {
                    "distinct_on": [
                        96,
                        "[blacklist_refresh_token_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        94,
                        "[blacklist_refresh_token_order_by!]"
                    ],
                    "where": [
                        86
                    ]
                }
            ],
            "blacklist_refresh_token_by_pk": [
                83,
                {
                    "sig": [
                        10,
                        "String!"
                    ]
                }
            ],
            "connectors": [
                101,
                {
                    "distinct_on": [
                        116,
                        "[connectors_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        114,
                        "[connectors_order_by!]"
                    ],
                    "where": [
                        104
                    ]
                }
            ],
            "connectors_aggregate": [
                102,
                {
                    "distinct_on": [
                        116,
                        "[connectors_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        114,
                        "[connectors_order_by!]"
                    ],
                    "where": [
                        104
                    ]
                }
            ],
            "connectors_by_pk": [
                101,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "customer_user": [
                119,
                {
                    "distinct_on": [
                        138,
                        "[customer_user_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        136,
                        "[customer_user_order_by!]"
                    ],
                    "where": [
                        126
                    ]
                }
            ],
            "customer_user_aggregate": [
                120,
                {
                    "distinct_on": [
                        138,
                        "[customer_user_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        136,
                        "[customer_user_order_by!]"
                    ],
                    "where": [
                        126
                    ]
                }
            ],
            "customer_user_by_pk": [
                119,
                {
                    "customer_id": [
                        490,
                        "uuid!"
                    ],
                    "user_id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "customer_user_service": [
                139,
                {
                    "distinct_on": [
                        155,
                        "[customer_user_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        153,
                        "[customer_user_service_order_by!]"
                    ],
                    "where": [
                        144
                    ]
                }
            ],
            "customer_user_service_aggregate": [
                140,
                {
                    "distinct_on": [
                        155,
                        "[customer_user_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        153,
                        "[customer_user_service_order_by!]"
                    ],
                    "where": [
                        144
                    ]
                }
            ],
            "customer_user_service_by_pk": [
                139,
                {
                    "customer_id": [
                        490,
                        "uuid!"
                    ],
                    "service": [
                        324,
                        "services_enum!"
                    ],
                    "user_id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "customer_user_sub_service": [
                165,
                {
                    "distinct_on": [
                        181,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        179,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        170
                    ]
                }
            ],
            "customer_user_sub_service_aggregate": [
                166,
                {
                    "distinct_on": [
                        181,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        179,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        170
                    ]
                }
            ],
            "customer_user_sub_service_by_pk": [
                165,
                {
                    "customer_id": [
                        490,
                        "uuid!"
                    ],
                    "service": [
                        324,
                        "services_enum!"
                    ],
                    "sub_service": [
                        10,
                        "String!"
                    ],
                    "user_id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "customers": [
                193,
                {
                    "distinct_on": [
                        229,
                        "[customers_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        227,
                        "[customers_order_by!]"
                    ],
                    "where": [
                        200
                    ]
                }
            ],
            "customers_aggregate": [
                194,
                {
                    "distinct_on": [
                        229,
                        "[customers_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        227,
                        "[customers_order_by!]"
                    ],
                    "where": [
                        200
                    ]
                }
            ],
            "customers_by_pk": [
                193,
                {
                    "id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "customers_contact": [
                202,
                {
                    "distinct_on": [
                        215,
                        "[customers_contact_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        213,
                        "[customers_contact_order_by!]"
                    ],
                    "where": [
                        205
                    ]
                }
            ],
            "customers_contact_aggregate": [
                203,
                {
                    "distinct_on": [
                        215,
                        "[customers_contact_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        213,
                        "[customers_contact_order_by!]"
                    ],
                    "where": [
                        205
                    ]
                }
            ],
            "customers_contact_by_pk": [
                202,
                {
                    "customer_id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "feature_names": [
                246,
                {
                    "distinct_on": [
                        261,
                        "[feature_names_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        259,
                        "[feature_names_order_by!]"
                    ],
                    "where": [
                        249
                    ]
                }
            ],
            "feature_names_aggregate": [
                247,
                {
                    "distinct_on": [
                        261,
                        "[feature_names_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        259,
                        "[feature_names_order_by!]"
                    ],
                    "where": [
                        249
                    ]
                }
            ],
            "feature_names_by_pk": [
                246,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "features": [
                264,
                {
                    "distinct_on": [
                        280,
                        "[features_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        278,
                        "[features_order_by!]"
                    ],
                    "where": [
                        269
                    ]
                }
            ],
            "features_aggregate": [
                265,
                {
                    "distinct_on": [
                        280,
                        "[features_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        278,
                        "[features_order_by!]"
                    ],
                    "where": [
                        269
                    ]
                }
            ],
            "features_by_pk": [
                264,
                {
                    "customer_id": [
                        490,
                        "uuid!"
                    ],
                    "name": [
                        251,
                        "feature_names_enum!"
                    ]
                }
            ],
            "partners": [
                285,
                {
                    "distinct_on": [
                        298,
                        "[partners_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        296,
                        "[partners_order_by!]"
                    ],
                    "where": [
                        288
                    ]
                }
            ],
            "partners_aggregate": [
                286,
                {
                    "distinct_on": [
                        298,
                        "[partners_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        296,
                        "[partners_order_by!]"
                    ],
                    "where": [
                        288
                    ]
                }
            ],
            "partners_by_pk": [
                285,
                {
                    "id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "roles": [
                301,
                {
                    "distinct_on": [
                        316,
                        "[roles_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        314,
                        "[roles_order_by!]"
                    ],
                    "where": [
                        304
                    ]
                }
            ],
            "roles_aggregate": [
                302,
                {
                    "distinct_on": [
                        316,
                        "[roles_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        314,
                        "[roles_order_by!]"
                    ],
                    "where": [
                        304
                    ]
                }
            ],
            "roles_by_pk": [
                301,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "services": [
                319,
                {
                    "distinct_on": [
                        334,
                        "[services_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        332,
                        "[services_order_by!]"
                    ],
                    "where": [
                        322
                    ]
                }
            ],
            "services_aggregate": [
                320,
                {
                    "distinct_on": [
                        334,
                        "[services_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        332,
                        "[services_order_by!]"
                    ],
                    "where": [
                        322
                    ]
                }
            ],
            "services_by_pk": [
                319,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "srv_names": [
                337,
                {
                    "distinct_on": [
                        352,
                        "[srv_names_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        350,
                        "[srv_names_order_by!]"
                    ],
                    "where": [
                        340
                    ]
                }
            ],
            "srv_names_aggregate": [
                338,
                {
                    "distinct_on": [
                        352,
                        "[srv_names_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        350,
                        "[srv_names_order_by!]"
                    ],
                    "where": [
                        340
                    ]
                }
            ],
            "srv_names_by_pk": [
                337,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "srv_urls": [
                355,
                {
                    "distinct_on": [
                        371,
                        "[srv_urls_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        369,
                        "[srv_urls_order_by!]"
                    ],
                    "where": [
                        360
                    ]
                }
            ],
            "srv_urls_aggregate": [
                356,
                {
                    "distinct_on": [
                        371,
                        "[srv_urls_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        369,
                        "[srv_urls_order_by!]"
                    ],
                    "where": [
                        360
                    ]
                }
            ],
            "srv_urls_by_pk": [
                355,
                {
                    "customer_id": [
                        490,
                        "uuid!"
                    ],
                    "name": [
                        342,
                        "srv_names_enum!"
                    ]
                }
            ],
            "status": [
                374,
                {
                    "distinct_on": [
                        389,
                        "[status_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        387,
                        "[status_order_by!]"
                    ],
                    "where": [
                        377
                    ]
                }
            ],
            "status_aggregate": [
                375,
                {
                    "distinct_on": [
                        389,
                        "[status_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        387,
                        "[status_order_by!]"
                    ],
                    "where": [
                        377
                    ]
                }
            ],
            "status_by_pk": [
                374,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "sub_services": [
                392,
                {
                    "distinct_on": [
                        409,
                        "[sub_services_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        407,
                        "[sub_services_order_by!]"
                    ],
                    "where": [
                        397
                    ]
                }
            ],
            "sub_services_aggregate": [
                393,
                {
                    "distinct_on": [
                        409,
                        "[sub_services_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        407,
                        "[sub_services_order_by!]"
                    ],
                    "where": [
                        397
                    ]
                }
            ],
            "sub_services_by_pk": [
                392,
                {
                    "name": [
                        10,
                        "String!"
                    ],
                    "service": [
                        324,
                        "services_enum!"
                    ]
                }
            ],
            "user_basic_data": [
                414,
                {
                    "distinct_on": [
                        431,
                        "[user_basic_data_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        429,
                        "[user_basic_data_order_by!]"
                    ],
                    "where": [
                        419
                    ]
                }
            ],
            "user_basic_data_aggregate": [
                415,
                {
                    "distinct_on": [
                        431,
                        "[user_basic_data_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        429,
                        "[user_basic_data_order_by!]"
                    ],
                    "where": [
                        419
                    ]
                }
            ],
            "user_basic_data_by_pk": [
                414,
                {
                    "user_id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "users": [
                434,
                {
                    "distinct_on": [
                        487,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        485,
                        "[users_order_by!]"
                    ],
                    "where": [
                        475
                    ]
                }
            ],
            "users_aggregate": [
                435,
                {
                    "distinct_on": [
                        487,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        485,
                        "[users_order_by!]"
                    ],
                    "where": [
                        475
                    ]
                }
            ],
            "users_auth_logs": [
                439,
                {
                    "distinct_on": [
                        458,
                        "[users_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        456,
                        "[users_auth_logs_order_by!]"
                    ],
                    "where": [
                        446
                    ]
                }
            ],
            "users_auth_logs_aggregate": [
                440,
                {
                    "distinct_on": [
                        458,
                        "[users_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        456,
                        "[users_auth_logs_order_by!]"
                    ],
                    "where": [
                        446
                    ]
                }
            ],
            "users_auth_logs_by_pk": [
                439,
                {
                    "id": [
                        4,
                        "Int!"
                    ]
                }
            ],
            "users_by_pk": [
                434,
                {
                    "id": [
                        490,
                        "uuid!"
                    ]
                }
            ],
            "__typename": [
                10
            ]
        }
    }
}